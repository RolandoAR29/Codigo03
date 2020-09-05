const express = require('express');
require('dotenv').config();



//creando el servidor de pruebas
const app = express();

app.use(express.static('public'));

// app.use(express)


//Rutas
// auth
app.use('/api/auth',require('./routes/auth'))
// CRUD: Eventos

//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor Corriendo en el puerto ${process.env.PORT}`)
})