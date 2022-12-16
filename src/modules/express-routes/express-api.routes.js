const express = require('express');
const {
  getRecord,
  postRecord,
  getRecords,
  editRecord,
  deleteRecord,
} = require('../express-controllers/express-api.controller');

const router = express.Router();

router.get('/api/records', getRecords);
router.get('/api/records/:id', getRecord);
router.post('/api/form', postRecord);
router.put('/api/records/:id', editRecord);
router.delete('/api/records/:id', deleteRecord);

module.exports = router;
