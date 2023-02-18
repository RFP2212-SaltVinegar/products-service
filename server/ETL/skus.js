const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;
const fs = require('fs');
const { onlyDigits, removeWhiteSpace } = require('./transformFns.js');

CSVtoJSON().fromFile('server/data/skus/raw-skus.csv').then(source => {
  for (var item of source) {
    onlyDigits(item, ['id', 'styleId', 'quantity']);
    removeWhiteSpace(item, ['size']);
  }

  const csv = JSONtoCSV(source, { fields: ['id', 'styleId', 'size', 'quantity']});
  fs.writeFileSync('server/data/skus/clean-skus.csv', csv);
});