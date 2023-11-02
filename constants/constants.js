exports.HTTP_STATUS_CODES = {
    ok: {
        code: 200,
    },
    created: {
        code: 201,
    },
    partialContent: {
        code: 206,
        error: 'Partial Response',
    },
    badRequest: {
        code: 400,
        error: 'Bad Request',
    },
    forbidden: {
        code: 403,
        error: 'Forbidden',
    },
    notFound: {
        code: 404,
        error: 'Not Found',
    },
    internalServerError: {
        code: 500,
        error: 'Internal Server Error',
    },
    badGateway: {
        code: 502,
        error: 'Bad gateway',
    },
};

exports.ERROR_MESSAGES = {
    apiCallError: 'Error while making request to Actian API',
    careerHandlerError: 'Career handler Failed!',
    departmentRequired: 'Department is required!',
    noDepartmentFound: 'No department found!'
};

exports.URLS = {
    ACTIAN_DOMAIN_URL: process.env.ACTIAN_DOMAIN_URL
};