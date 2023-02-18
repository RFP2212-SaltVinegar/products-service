const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;
const fs = require('fs');
const { onlyDigits } = require('./transformFns.js');

CSVtoJSON().fromFile('server/data/cart/raw-cart.csv').then(source => {
  for(var item of source) {
    onlyDigits(item, ['id', 'user_session', 'product_id', 'active']);
  }
  const csv = JSONtoCSV(source, { fields: ['id', 'user_session', 'product_id', 'active']});
  fs.writeFileSync('server/data/cart/clean-cart.csv', csv);
});