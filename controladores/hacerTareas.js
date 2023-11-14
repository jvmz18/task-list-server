const tasks = require("../Tareas");


const hacerTareas = (req, res) => {
    const { id, isCompleted, description} = req.body;

    const tarea = {
        id,
        isCompleted,
        description
    }

    tasks.push(tarea)

    res.json(tarea)
}

module.exports = hacerTareas;