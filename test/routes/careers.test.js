const request = require('supertest');
const app = require('../../app');
const careersHandler = require('../../handlers/careersHandler');
const { NotFoundError } = require('../../handlers/error/errorHandler');


jest.mock('../../handlers/careersHandler');
jest.mock('axios');

describe('GET /api/creers', () => {
    it('should return 404 department not found', async () => {
        careersHandler.mockImplementation(() => {
            throw new NotFoundError('No department found!');
        });
        const response = await request(app).get('/api/careers?department=test');
        expect(response.status).toBe(404);
    });

    it('should return 400 department is required', async () => {
        const response = await request(app).get('/api/careers');
        expect(response.status).toBe(400);
    });

    it('should return 200 list of job titles', async () => {
        careersHandler.mockImplementation(() => {
            return {
                jobTitles: ["Business Development Representative",
                    "Business Development Representative US",
                    "Cloud Sales Representative"]
            };
        });
        const response = await request(app).get('/api/careers?department=sales');
        expect(response.status).toBe(200);
    });
});