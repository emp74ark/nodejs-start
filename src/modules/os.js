const os = require('os');

const platform = os.platform();
const version = os.version();

module.exports = { platform, version };
