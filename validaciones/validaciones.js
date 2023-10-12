const ValidarContacto =() =>{
    //validar campos vacios
    let nombre = document.querySelector('#nombre').value
    let apellido = document.querySelector('#apellido').value
    let edad = document.querySelector('#edad').value
    let genero = document.querySelector('#genero').value
    let tipo_documento = document.querySelector('#identidad').value
    let numero_dpcumento = document.querySelector('#nro_documento').value
    if (nombre.length==0) {
        alert('el nombre esta vacio. verifique')
    }
    else if(apellido.length==0){
        alert('El apellido esta vacio. verifique')
    }else if(edad.length==0){
        alert('La edad esta vacia. verifique')
    }else if(genero.length==0){
        alert('No elegiste el genero biologicco verifique')
    }else if(tipo_documento.length==0){
        alert('No elegiste el tipo documento verifique')
    }else if(numero_dpcumento.length==0){
        alert('El número de documento es vacio. verifique')
    }else{
        alert('datos enviados correctamente')
    }

   
}

const boton =document.querySelector('#btnEnviar')

boton.addEventListener('click', () => ValidarContacto())