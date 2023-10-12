const calculadora = () => {
    let precio = document.getElementById("precio").value;
    let cantidad = document.getElementById("cantidad").value;

    if(precio.length != 0 || cantidad.length != 0){
        document.getElementById('precio_final').value = precio * cantidad;
    }else{

    }
   
}