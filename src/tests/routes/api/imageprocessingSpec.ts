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
    expect(async () => {
      await imageprocessing(filename, testWidth, testHeight);
    }).not.toThrow();
  });
});

describe('Check input values', () => {
  it('checks the width is greater than 0', async (): Promise<void> => {
    const width = 500;
    expect(async () => {
      await imageprocessing("fjord.jpg", width, 500);
    }).not.toThrow();
  });

  it('checks that the height value is a number', async (): Promise<void> => {
    const height = 500;
    expect(async () => {
      await imageprocessing("fjord.jpg", 500, height);
    }).not.toThrow();
  });
});
