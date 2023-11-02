const express = require('express');
const router = express.Router();
const logger = require('../logger/logger');
const { HTTP_STATUS_CODES, ERROR_MESSAGES }= require('../constants/constants');
const careersHandler = require('../handlers/careersHandler');
const responseFormater = require('../utils/responseFormater');
const { ValidationError } = require('../handlers/error/errorHandler');

/**
 * Returns list of current job openings for the department sent in query
 *
 * @Method GET
 * @URL /api/careers?department={departmentName}
 * @Query department: string
 */
router.get('/careers', async (req, res) => {
    try {
        const department = req.query.department;
        if (!department) {
            throw new ValidationError(ERROR_MESSAGES.departmentRequired);
        }
        const responseData = await careersHandler(department);
        return responseFormater.handleResponse(HTTP_STATUS_CODES.ok.code, responseData, res);
    } catch (error) {
        logger.error(`Error: ${error.message}`);
        return responseFormater.handleErrorResponse(error, res);
    }
});



module.exports = router;
