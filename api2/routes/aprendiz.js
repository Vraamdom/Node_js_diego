const {Router} = require('express')

const route = Router()

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

//Listar todos los datos
route.get('/',(req, res)=>{
    res.json({
        msg: usuarios
    })
})

// Consultar un dato
route.get('/consultarUsuario',(req, res)=>{
    const {CorreoElectronico} = req.query

    let resultado = ''

    //Buscar si el documento recibido existe en el array aprendices

    resultado = usuarios.find(usuarios => usuarios.CorreoElectronico === CorreoElectronico)

    res.json({
        msg:resultado
    })
})

route.post('/', (req,res) =>{
    const {NombreCompleto,CorreoElectronico,Contraseña,ConfirmarContraseña} = req.query
    usuarios.push({
        "NombreCompleto" :NombreCompleto,
        "CorreoElectronico" : CorreoElectronico,
        "Contraseña": Contraseña,
        "ConfirmarContraseña":ConfirmarContraseña
    })

    res.json({
        msg: usuarios
    })
})

route.put('/editar', (req,res) =>{
 // Implementar logica

    res.json({
        msg: 'Modificación realizada'
    })
})

route.delete('/eliminar', (req,res) =>{
    // Implementar logica

    res.json({
        msg: 'Usuario eliminadp'
    })
})

module.exports = route