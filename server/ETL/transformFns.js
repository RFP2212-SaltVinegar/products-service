/*========================
  Transformation Functions
========================== */

module.exports.removeWhiteSpace = (item, fields) => {
  for (var field of fields) {
    item[field] = item[field].trim();
  }
};

module.exports.onlyDigits = (item, fields) => {
  for (var field of fields) {
    item[field] = parseInt(item[field].replace(/\D/g, ''));
    isNaN(item[field]) ? item[field] = null : null;
  }
};

module.exports.onlyBoolean = (item, fields) => {
  for (var field of fields) {
    item[field] = parseInt(item[field]);
    if (item[field] !== 1 && item[field] !== 0) {
      item[field] = 0;
    }
  }
};
