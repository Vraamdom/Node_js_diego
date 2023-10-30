//importacion de un paquete
const express = require('express')

//Especifica el metodo del paquete a emplear
const app = express();

//Especificar el puerto
const port = 8282

app.get('/',(req,res )=>{
    res.sendFile(__dirname + '/public/home.html')
})

app.get('/productos',(req,res )=>{
    res.sendFile(__dirname + '/public/productos.html')
})

app.get('/contacto',(req,res )=>{
    res.sendFile(__dirname + '/public/contacto.html')
})

app.get('/clientes',(req,res )=>{
    res.sendFile(__dirname + '/public/clientes.html')
})


app.get('*',(req,res )=>{
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, ()=>{
    console.log(`Escuchando por el puerto ${port}`)
})


