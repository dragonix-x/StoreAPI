const { StatusCodes } = require('http-status-codes');
const CustomError = require("./CustomError");

class NotFound extends CustomError{
    constructor(message){
        super(message);
        this.errorCode = StatusCodes.NOT_FOUND; 
    }
}

module.exports =  NotFound;