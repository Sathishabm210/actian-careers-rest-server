const { NotFoundError, ValidationError } = require('../handlers/error/errorHandler');
const { HTTP_STATUS_CODES } = require('../constants/constants');

// Custom response handler function
exports.handleResponse = function (statusCode, responseData, res) {
    res.status(statusCode).json({
        statusCode: statusCode,
        responseData
    });
}

exports.handleErrorResponse = function (error, res) {
    let errorCode;
    switch (true) {
        case error instanceof NotFoundError:
            errorCode = HTTP_STATUS_CODES.notFound.code;
            break;
        case error instanceof ValidationError:
            errorCode = HTTP_STATUS_CODES.badRequest.code;
            break;
        default:
            errorCode = HTTP_STATUS_CODES.internalServerError.code;
    }
    res.status(errorCode).json({
        statusCode: errorCode,
        responseData: {
                error,
                message: error.message
            }
        
    });
}
