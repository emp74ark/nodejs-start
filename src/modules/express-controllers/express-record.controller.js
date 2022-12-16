const { file } = require('./express-path.controller');
const records = require('../../files/records.json');
const fs = require('fs');
const { data } = require('./express-path.controller');

function updateData(newData) {
  fs.writeFile(data, JSON.stringify(newData), (err) => {
    if (err) throw err;
  });
}

const getRecord = (request, response) => {
  const { id } = request.params;
  const record = records.find((el) => el.id == id);
  response.render(file('record'), { title: 'Record', record });
};

const postRecord = (request, response) => {
  const { title, text, date } = request.body;
  const record = {
    id: Date.now(),
    title,
    text,
    date,
  };
  const newData = [...records, record];
  updateData(newData);
  response.render(file('records'), { title: 'Records', records });
};

module.exports = {
  getRecord,
  postRecord,
};
