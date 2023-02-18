const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;
const fs = require('fs');
const { onlyDigits, removeWhiteSpace } = require('./transformFns.js');

CSVtoJSON().fromFile('server/data/products/raw-products.csv').then(source => {
  for (var item of source) {
    onlyDigits(item, ['id', 'default_price']);
    removeWhiteSpace(item, ['name', 'slogan', 'description', 'category']);
  }

  const csv = JSONtoCSV(source, { fields: ['id', 'name', 'slogan', 'description', 'category', 'default_price']});
  fs.writeFileSync('server/data/products/clean-products.csv', csv);
});