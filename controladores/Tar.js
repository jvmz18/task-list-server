const Tareas = require("../Tareas");
const Tareas = require("../Tareas");


const Tar = (req, res) => {
    const {Completed} = req.params
    console.log(Completed);
    console.log(Completed == 'Completed')

    if (Completed == 'Completed') {
        const completedTareas = Tareas.filter(Tareas => Tareas.isCompleted);

        res.json(completedTareas)
    } else if (Completed =='InCompleted') {
        const inCompletedTareas = Tareas.filter(Tareas => !Tareas.isCompleted)
        res.json(inCompletedTareas)
    } else {
        res.status(400).send('ERROR')
    }

};

module.exports = Tar;