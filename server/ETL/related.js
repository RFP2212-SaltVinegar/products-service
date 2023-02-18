const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;
const fs = require('fs');
const { onlyDigits } = require('./transformFns.js');

CSVtoJSON().fromFile('server/data/related/raw-related.csv').then(source => {
  for (var item of source) {
    onlyDigits(item, ['id', 'current_product_id', 'related_product_id']);
  }

  const csv = JSONtoCSV(source, { fields: ['id', 'current_product_id', 'related_product_id']});
  fs.writeFileSync('server/data/related/clean-related.csv', csv);
});