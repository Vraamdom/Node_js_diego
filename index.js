//Importación de un paquete.
const express = require('express');

//Especificar el método del paquete a emplear.
const app = express();

//Especificar el puerto.
const port = 8282

app.get('/', (req, res) => {
    res.write('Método get');
    // res.sendfile();
    res.end();
});

app.get('/productos', (req, res) => {
    // res.write('Página no encontrada');
    res.sendFile(__dirname + '/public/productos.html');
    
});

//Desplegar ek 404: pÁgina no encontrada
app.get('*', (req, res) => {
    // res.write('Página no encontrada');
    res.sendFile(__dirname + '/public/404.html');
    // res.end();
});


//Especificar el puerto a emplear
app.listen(port, ()=> {
    console.log(`Escuchando por el puerto ${port}`);
});

/*
res: Respuesta
req: Petición
*/
// Crear un proyecto en node que incluya el diseño de su login, el menú y los formularios
// de su proyecto