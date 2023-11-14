const tasks = require("../Tareas");

const actTareas = (req, res) => {
    const taskId = req.params.id;
    const {isCompleted, description} = req.body;
    const taskToUpdate = tasks.find(task => task.id === taskId);

    if (taskToUpdate) {
        taskToUpdate.isCompleted = isCompleted;
        taskToUpdate.description = description;

        res.send(`Tarea con ID ${taskId} act.`)
    } else {
        res.status(404).send('tar no encontrada.')
    }
}

module.exports = actTareas;