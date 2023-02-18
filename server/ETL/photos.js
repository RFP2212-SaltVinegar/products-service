const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;
const fs = require('fs');
const { onlyDigits } = require('./transformFns.js');

CSVtoJSON().fromFile('server/data/photos/raw-photos.csv').then(source => {
  for (var item of source) {
    onlyDigits(item, ['id', 'styleId']);
  }

  const csv = JSONtoCSV(source, { fields: [ 'id', 'styleId', 'url', 'thumbnail_url' ]});
  fs.writeFileSync('server/data/photos/clean-photos.csv', csv);
});
