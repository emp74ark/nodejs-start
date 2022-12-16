const records = require('../../files/records.json');
const fs = require('fs');
const { data } = require('./express-path.controller');

function updateData(newData) {
  fs.writeFile(data, JSON.stringify(newData), (err) => {
    if (err) throw err;
  });
}

const getRecords = (request, response) => {
  response.status(200).json(records);
};

const getRecord = (request, response) => {
  const { id } = request.params;
  const record = records.find((el) => el.id == id);
  response.status(200).json(record);
};

const postRecord = (request, response) => {
  const { title, text, date } = request.body;
  const record = {
    id: Date.now(),
    title,
    text,
    date
  };
  const newData = [...records, record];
  updateData(newData);
  response.json(record);
};

const editRecord = (request, response) => {
  const { title, text, date } = request.body;
  const { id } = request.params;
  const record = {
    id,
    title,
    text,
    date
  };
  const newData = records.map(el => el.id == id ? el = record : el);
  updateData(newData);
  response.json(record);
};

const deleteRecord = (request, response) => {
  const { id } = request.params;
  const newData = records.filter((el) => el.id != id);
  updateData(newData);
  response.json(id);
};

module.exports = {
  getRecords,
  getRecord,
  postRecord,
  editRecord,
  deleteRecord
};
