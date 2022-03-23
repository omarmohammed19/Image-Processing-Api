import supertest from "supertest";
import app from "../../..";
import fs from 'fs';

const request = supertest(app);

describe('Test endpoint responses', () => {
    it('checks the api response status', async () => {
        const response = await request.get('/api/imageprocessing?width=200&height=200')
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeDefined();
    });
});

describe('Check input values', () => {
    it('checks the width is greater than 0', async () => {
        const width = 500;
        const response = await request.get(`/api/imageprocessing?width=${width}&height=200`)
        expect(width).toBeGreaterThan(0);
        expect(response.body.length).toBeDefined();

    });

    it('checks that the height value is a number', async () => {
        const height = 500;
        const response = await request.get(`/api/imageprocessing?width=200&height=${height}`)
        expect(height).not.toBeNaN;
        expect(response.body.length).toBeDefined();

    });
});


