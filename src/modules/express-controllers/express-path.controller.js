const path = require('path');

const file = (page) => path.resolve(__dirname, '..', '..', 'ejs', `${page}.ejs`);
const styles = path.resolve(__dirname, '..', '..', 'styles');
const data = path.resolve(__dirname, '..', '..', 'files', 'records.json');

module.exports = { file, styles, data };
