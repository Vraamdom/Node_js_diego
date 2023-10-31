const express = require('express')
class Server{
    constructor(){
        this.app = express()
        this.port = process.env.PORT
    }
    listen(){
        this.app.listen(
            this.port, () => {
                console.log('Estás conectado con el puerto '+ this.port)
            }
        )
    }

    routes(){
        this.app.get('/', (req, res) =>{
            res.json({
                msg:'GET'
            })
        })
    }

}

module.exports = {Server} //Exportación  de la clase
