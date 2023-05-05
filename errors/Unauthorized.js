const { StatusCodes } = require('http-status-codes');
const CustomError = require("./CustomError");

class Unauthorized extends CustomError{
    constructor(message){
        super(message);
        this.errorCode = StatusCodes.UNAUTHORIZED; 
    }
}

module.exports =  Unauthorized;