const express = require("express");
const lisedrouter = express.Router();
const handleInvalidRequest = require('./middlewares/manejador');
const createTask = require('./controladores/hacerTareas')
const deleteTask = require('./controladores/borrarTar')
const updateTask = require('./controladores/actTareas')

lisedrouter.post('/hacerTareas', handleInvalidRequest, createTask);

lisedrouter.delete('/borrarTar/:id', deleteTask);

lisedrouter.put('/actTareas/:id', handleInvalidRequest, updateTask);

module.exports = lisedrouter;