const express = require('express');
const router = express.Router();
const verifyParams = require('./middlewares/val');
const getTasks = require('./controladores/Tar');
router.get('/Tareas/:Completed',verifyParams, getTasks);
module.exports = router;