const { records } = require('../variables');

const getRecords = (request, response) => {
  response.status(200).json(records);
};

const getRecord = (request, response) => {
  response.status(200).json(records[0]);
};

const postRecord = (request, response) => {
  const { title, text, date } = request.body;
  const record = {
    id: Date.now(),
    title,
    text,
    date
  };
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
  response.json(record);
};

const deleteRecord = (request, response) => {
  const { id } = request.params;
  response.json(id);
};

module.exports = {
  getRecords,
  getRecord,
  postRecord,
  editRecord,
  deleteRecord
};
