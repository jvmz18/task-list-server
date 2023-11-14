const express = require('express');
const app = express();
const port = 3000;
const Tareas = require('./Tareas');
const listViewRouter = require("./list-view-router");      // routers
const listEditRouter = require("./list-edit-router");
app.use(express.json());                                          
app.use("/list-view", listViewRouter);
app.use("/list-edit", listEditRouter);
app.get('/Tareas', (req, res) => {
    res.json(Tareas);
});
app.listen(port, () => {
    console.log(`El servidor escucha en el puerto http://localhost:${port}`); // servidor
});