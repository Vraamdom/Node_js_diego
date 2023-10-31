// Importa paquetes
require('dotenv').config()

//Importa clase o archivos necesarios 
const {Server} = require('./models/server')

const server = new Server() //Se crea instancia 

server.listen()
