require('dotenv').config();
const { describe, expect, it } = require('@jest/globals');
const request = require('postman-request');
const { id, name, slogan, description, category, default_price, features } = require('../test-data/product.js');

const url = `http://${process.env.HOST}:${process.env.PORT}/products/${id}`

describe('Product Information', () => {
  it('should receive a 200 status code', async () => {
    return await request.get(url, (err, res) => {
      expect(err).toBeNull;
      expect(res.statusCode).toBe(200);
    });
  });

  it('should have all the same product property types', async () => {
    return await request.get(url, (err, res, body) => {
      var result = JSON.parse(body);
      expect(typeof result).toBe('object');

      expect(typeof result.id).toBe('number');
      expect(typeof result.name).toBe('string');
      expect(typeof result.slogan).toBe('string');
      expect(typeof result.description).toBe('string');
      expect(typeof result.category).toBe('string');
      expect(typeof result.default_price).toBe('string');

      expect(Array.isArray(result.features)).toBeTruthy();
    })
  });

  it('should receive the correct product information', async () => {
    return await request.get(url, (err, res, body) => {
      var result = JSON.parse(body);
      expect(typeof result).toBe('object');

      expect(result.id).toBe(id);
      expect(result.name).toBe(name);
      expect(result.slogan).toBe(slogan);
      expect(result.description).toBe(description);
      expect(result.category).toBe(category);
      expect(result.default_price).toBe(default_price);

      expect(Array.isArray(result.features)).toBeTruthy();

      for (var i = 0; i < result.features.length; i++) {
        expect(result.features[i].feature).toBe(features[i].feature);
        expect(result.features[i].value).toBe(features[i].value);
      }
    })
  });
})