require('dotenv').config();
const { describe, expect, it } = require('@jest/globals');
const request = require('postman-request');
const { product_id, results } = require('../example/style.js');

const url = `http://${process.env.HOST}:${process.env.PORT}/products/${product_id}/styles`;

describe('Product Style', () => {
  it('should receive a 200 status code', async () => {
    return await request.get(url, (err, res) => {
      expect(err).toBeNull;
      expect(res.statusCode).toBe(200);
    });
  });

  it('should have all the same style property types', async () => {
    return await request.get(url, (err, res, body) => {
      var output = JSON.parse(body);
      expect(typeof output).toBe('object');

      expect(typeof output.product_id).toBe('number');
      expect(Array.isArray(output.results)).toBeTruthy();

      expect(typeof output.results[0].style_id).toBe('number');
      expect(typeof output.results[0].name).toBe('string');
      expect(typeof output.results[0].original_price).toBe('string');
      expect(typeof output.results[0]['default?']).toBe('boolean');
      expect(Array.isArray(output.results[0].photos)).toBeTruthy();
      expect(typeof output.results[0].skus).toBe('object');
    });
  });

  it('should receive the correct style information', async () => {
    return await request.get(url, (err, res, body) => {
      var output = JSON.parse(body);

      expect(output.results[0].style_id).toBe(results[0].style_id);
      expect(output.results[0].name).toBe(results[0].name);
      expect(output.results[0].original_price).toBe(results[0].original_price);
      expect(output.results[0].sale_price).toBe(results[0].sale_price);
      expect(output.results[0]['default?']).toBe(results[0]['default?']);
      expect(output.results[0].photos[0].thumbnail_url).toBe(results[0].photos[0].thumbnail_url);
      expect(output.results[0].photos[0].url).toBe(results[0].photos[0].url);
      expect(output.results[0].skus[1].quantity).toBe(results[0].skus[1].quantity);
      expect(output.results[0].skus[1].size).toBe(results[0].skus[1].size);
    });
  });
})