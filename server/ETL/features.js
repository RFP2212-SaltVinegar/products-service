const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;
const fs = require('fs');
const { onlyDigits, removeWhiteSpace } = require('./transformFns.js');

CSVtoJSON().fromFile('server/data/features/raw-features.csv').then(source => {
  for (var item of source) {
    onlyDigits(item, ['id', 'product_id']);
    removeWhiteSpace(item, ['feature', 'value']);
  }
  const csv = JSONtoCSV(source, { fields: ['id', 'product_id', 'feature', 'value']});
  fs.writeFileSync('server/data/features/clean-features.csv', csv);
});