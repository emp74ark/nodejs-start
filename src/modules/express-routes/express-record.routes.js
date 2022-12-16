const express = require('express');
const { getRecord, postRecord } = require('../express-controllers/express-record.controller');

const router = express.Router();

router.get('/records/:id', getRecord);
router.post('/form', postRecord);

module.exports = router;
