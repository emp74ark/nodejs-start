const path = require('path');

const file = (page) => path.resolve(__dirname, '..', '..', 'ejs', `${page}.ejs`);
const styles = path.resolve(__dirname, '..', '..', 'styles');

module.exports = { file, styles };