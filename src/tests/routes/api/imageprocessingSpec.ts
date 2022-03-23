import supertest from "supertest";
import app from "../../..";
import fs from 'fs';
import imageprocessing from "../../../routes/api/imageprocessingService";

const request = supertest(app);

describe('Test endpoints responses', () => {
    it('checks the api resizing response status', async () => {
        const response = await request.get('/api/imageprocessing?width=200&height=200')
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeDefined();
    });

    it('checks the api deletion response status', async () => {
        const response = await request.delete('/api/imageprocessing/deletethumbnails')
        expect(response.statusCode).toBe(200);
    });
});

describe('Image Processing', () => {
    it('checks the processing of the image', async () => {
        const testWidth = 500, testHeight = 500;
        const response = await request.get('/api/imageprocessing?width=200&height=200')
        expect(async () => {
            await imageprocessing(testWidth, testHeight);
        }).not.toThrow();
    });

    it('checks the api deletion response status', async () => {
        const response = await request.delete('/api/imageprocessing/deletethumbnails')
        expect(response.statusCode).toBe(200);
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


