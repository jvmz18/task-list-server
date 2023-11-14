const Tareas = require("../Tareas");

const borrarTar = (req, res) => {
    const taskId = req.params.id;
    const taskIndex = Tareas.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        Tareas.splice(taskIndex,1);
        res.send(`Tarea con ID ${taskId} borrada.`)
    } else {
        res.status(404).send('la tarea no fue encontrada.')
    }
}

module.exports = borrarTar;