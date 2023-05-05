const { StatusCodes }  = require('http-status-codes');

const notFoundHandler = (req, res) => {
    res.status(StatusCodes.NOT_FOUND);
}

module.exports = notFoundHandler;