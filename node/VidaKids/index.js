const express = require('express')

const hbs = require('hbs')
const path = require('path')

const app = express()

const port = 8383

app.use(express.static('public'))


app.set('views', path.join(__dirname+'/public/views'))

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/public/views/partials')


app.get('/', (req, res) =>{
    res.render( 'index')
})

app.get('/productos', (req, res) =>{
    res.render( 'productos')
})

app.get('/contacto', (req, res) =>{
    res.render( 'contacto'
    )
})

app.get('*', (req, res) =>{
    res.render('404')
})

app.listen(port, ()=>{
    console.log(`Listen to port: ${port}`)
})