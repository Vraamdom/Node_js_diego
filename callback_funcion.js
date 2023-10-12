// function saludar(nombre){
//     alert("hola", + nombre);
// }
// function procesarEntradaUsuario(callback){
//     var nombre = prompt("Porfavor ingresa tu nombre");
//     callback(nombre);
// }
// procesarEntradaUsuario(saludar)
function ingresaNumeroUsuario(callback){
    var numero = prompt("Ingresa un número");
    parseInt(numero);
    callback(numero);
}

function sumarNumeros(numero){
    if(numero >= 10){
        numeroTotal= 0;
        for(var i=0; numero<= 100; i++){
            //
            numeroTotal+= i;
        }
        alert("La suma del numero es: " + numeroTotal)
    }else{
        alert("No se realizará la suma ya que el número es menor que 10");
    }
}

ingresaNumeroUsuario(sumarNumeros);