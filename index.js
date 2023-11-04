require('dotenv').config()
const express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes')
const app = express()
const cors = require('cors')

const corsOptions = {
    origin: '*', // Reemplaza esto con el dominio permitido
    methods: 'GET,PUT,POST,DELETE',
    credentials: true, // Permite el envío de cookies o credenciales
    optionsSuccessStatus: 204, // Configura el código de respuesta para las solicitudes OPTIONS
};

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)

app.use('/v1', routes)

app.post('/', (req, res) => {
    res.json({
        mensaje: 'se creó un elemento'
    })
})

app.get('/', (req, res) => {
    res.json({
        mensaje: 'se obtuvo un elemento'
    })
})

app.put('/', (req, res) => {
    res.json({
        mensaje: 'se actualizó un elemento'
    })
})

app.delete('/', (req, res) => {
    res.json({
        mensaje: 'se eliminó un elemento'
    })
})

app.listen(process.env.PORT, () => {
    console.log('Servidor iniciado en el puerto ' + process.env.PORT)
})