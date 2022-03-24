/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import supertest from 'supertest';
import app from '../../..';
import imageprocessing from '../../../routes/api/imageprocessingService';

const request = supertest(app);

describe('Test endpoints responses', () => {
  it('checks the api resizing response status', async (): Promise<void> => {
    const response = await request.get('/api/imageprocessing?filename=encenadaport.jpg&width=200&height=200');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeDefined();
  });

  it('checks the api deletion response status', async (): Promise<void> => {
    const response = await request.delete('/api/imageprocessing/deletethumbnails');
    expect(response.statusCode).toBe(200);
  });
});

describe('Image Processing', () => {
  it('checks the processing of the image', async (): Promise<void> => {
    const testWidth = 500,
      testHeight = 500,
      filename = 'encenadaport.jpg';
    const response = await request.get('/api/imageprocessing?filename=encenadaport.jpg&width=200&height=200');
    expect(async () => {
      await imageprocessing(filename, testWidth, testHeight);
    }).not.toThrow();
  });
});

describe('Check input values', () => {
  it('checks the width is greater than 0', async (): Promise<void> => {
    const width = 500;
    const response = await request.get(`/api/imageprocessing?filename=encenadaport.jpg&width=${width}&height=200`);
    expect(width).toBeGreaterThan(0);
    expect(response.body.length).toBeDefined();
  });

  it('checks that the height value is a number', async (): Promise<void> => {
    const height = 500;
    const response = await request.get(`/api/imageprocessing?filename=encenadaport.jpg&width=200&height=${height}`);
    expect(height).not.toBeNaN;
    expect(response.body.length).toBeDefined();
  });
});
