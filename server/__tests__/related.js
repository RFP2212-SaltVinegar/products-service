require('dotenv').config();
const { describe, expect, it } = require('@jest/globals');
const request = require('postman-request');
const { product_id, results } = require('../example/related.js');

const url = `http://${process.env.HOST}:${process.env.PORT}/products/${product_id}/related`;

describe('Related Products', () => {
  it('should receive a 200 status code', async () => {
    return await request.get(url, (err, res) => {
      expect(err).toBeNull;
      expect(res.statusCode).toBe(200);
    });
  });

  it('should return an array', async () => {
    return await request.get(url, (err, res, body) => {
      var output = JSON.parse(body);
      expect(Array.isArray(output)).toBeTruthy();
    });
  });

  it('should return the correct related product information', async () => {
    return await request.get(url, (err, res, body) => {
      var output = JSON.parse(body);
      for (var i = 0; i < output.length; i++) {
        expect(output[i]).toBe(results[i]);
      }
    });
  })
})