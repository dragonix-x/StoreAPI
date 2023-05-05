require('dotenv').config();
require('express-async-errors');
const express = require('express');
const { connect } = require('mongoose');
const path = require('node:path');

const { errorHandler, notFoundHandler } = require('./middlewares/index') ;
const roleRouter = require('./routes/role');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());



app.use('/api/v1/info', (req, res) => {
    res.send(path.resolve('./README.md'));
})

app.use('/api/v1/roles', roleRouter);

app.use(notFoundHandler);
app.use(errorHandler);

const start = async() => {
    try {
       connect(process.env.MONGO_URI);
       app.listen(PORT, console.log(`Server is running on port ${PORT}`))
    } catch (error) {
       console.log(error);
    }
}

start();