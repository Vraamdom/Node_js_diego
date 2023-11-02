const express = require('express')

class Server{

    constructor(){
        this.app = express()
        this.port= process.env.PORT
        this.routes()
        this.app.aprendizPath = 'api/aprendiz'
    }
listen(){
   this.app.listen(
    this.port, () =>{
     console.log('escuchando por el puerto '+this.port)


    }
   )
}
routes(){
    this.app.use(this.app.aprendizPath, requiere('../routes/aprendi'))
  
}
}
module.exports ={Server}//exportacion de la clase.
//Crear el metodo get y put para una colección de su proyecto
//Emplear un array de objetos para almacenar la información
