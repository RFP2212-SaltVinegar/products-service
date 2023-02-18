const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;
const fs = require('fs');
const { onlyDigits, removeWhiteSpace, onlyBoolean } = require('./transformFns.js');

CSVtoJSON().fromFile('server/data/styles/raw-styles.csv').then(source => {
  for (var item of source) {
    onlyDigits(item, ['id', 'productId', 'sale_price', 'original_price']);
    removeWhiteSpace(item, ['name']);
    onlyBoolean(item, ['default_style']);
  }

  const csv = JSONtoCSV(source, { fields: [ 'id', 'productId', 'name', 'sale_price', 'original_price', 'default_style' ]});
  fs.writeFileSync('server/data/styles/clean-styles.csv', csv);
});