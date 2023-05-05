const { StatusCodes } = require('http-status-codes');

const errorHandler = (err, req, res, next) => {
    const customError = {
        message: err.message || 'Something Went Wrong, Try Again later Please',
        statusCode: err.statusCode || 500
    }

    res.status(customError.statusCode).json(customError.message)
}

module.exports = errorHandler;