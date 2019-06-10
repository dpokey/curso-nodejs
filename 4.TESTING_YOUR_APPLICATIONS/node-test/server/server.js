
const express = require('express')

var app = express()

app.get('/', (req, res) => {
    // con status, podemos cambiar el codigo de envio de respuesta 
    // res.status(404).send('Hello World!')

    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo app v1.0'
    })
})

app.listen(3000)

module.exports.app = app