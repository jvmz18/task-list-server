const handleInvalidRequest = (req,res,next) => {
    if (req.method === 'POST' || req.method === 'PUT')
    {
        if (!req.body || Object.keys(req.body).length === 0)
        {
            return res.status(400).json({ error: 'Solicitud con cuerpo vacio.'});
        }

        const {id, isCompleted, description } = req.body;
        if (!id || typeof isCompleted !== 'boolean' || !description)
        {
            return res.status(400).json({ error: ' informacion invalida'});
        }
    }
    next();
}

module.exports = handleInvalidRequest;