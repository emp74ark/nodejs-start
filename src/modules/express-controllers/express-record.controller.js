const { file } = require('./express-path.controller');
const { records } = require('../variables');

const getRecord = (request, response) => {
  response.render(file('record'), { title: 'Record', record: records[0] });
};

const postRecord = (request, response) => {
  const { title, text, date } = request.body;
  const record = {
    id: Date.now(),
    title,
    text,
    date
  };
  response.render(file('record'), { title: 'Record', record });
};

module.exports = {
  getRecord,
  postRecord
};