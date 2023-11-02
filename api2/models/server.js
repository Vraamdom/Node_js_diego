const express = require('express')
let usuarios = [
    {
    "NombreCompleto" :"AlixTrululu",
    "CorreoElectronico" : "Yiseth07qgmail.com",
    "Contraseña": "1018227558iD",
    "ConfirmarContraseña":"1018227558iD"
},
{
    "NombreCompleto" :"AlixTrululu",
    "CorreoElectronico" : "Alidyd@gmail.com",
    "Contraseña": "1018227558313D",
    "ConfirmarContraseña":"101822755813D"
}
]
class Server{

    constructor(){
        this.app = express()
        this.port= process.env.PORT
        this.routes()
    }
listen(){
   this.app.listen(
    this.port, () =>{
     console.log('escuchando por el puerto '+this.port)


    }
   )
}
routes(){
  
}
}
module.exports ={Server}//exportacion de la clase.
//Crear el metodo get y put para una colección de su proyecto
//Emplear un array de objetos para almacenar la información
