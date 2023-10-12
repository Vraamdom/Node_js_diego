const validarUsuario =() =>{
    alert(2)
    let usuario = document.getElementById('usuario').value
    let contraseña = document.getElementById('contraseña').value
    let mensaje= ''
    if(usuario.length==0) {
        alert('El campo usuario esta vacio. verifique')
    }else if(usuario.value != 'brandon'){
        alert('El usuario no está registrado')
    }else if(contraseña.length==0){
        alert('El campo contraseña no debe de estar vacio')
    }else if(contraseña.value !='1234'){
        alert('Ingresaste una contraseña incorrecta')
    }else if(usuario.value == 'brandon' && contraseña.value == '1234'){
        mensaje = 'El usuario ' + usuario + ' ha iniciado sesión';
    }
}
const boton = document.querySelector('#btn')
boton.addEventListener('click', () => validarUsuario())