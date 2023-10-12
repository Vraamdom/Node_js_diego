const buscarCliente = (dato) =>{
    const documentos = [1023,1010,1203,1222]
    const nombres =["carmen", "mario", "omar", "rafael"]
    let encontrado = false;
    let nombre = "";
    for(let i = 0; i<documentos.length;i++){
        if(dato == documentos[i]){
            encontrado = true
            nombre = nombres[i]
        }
    }

    return new Promise((resolve, reject)=>{
        if(encontrado){
            resolve('La persona a la que le pertenece el documento es: '+  nombre)
            
        }else{
            reject('No se encontró el dato')
        }
    })
}
document.querySelector('#btnBuscar').addEventListener('click', () => buscarCliente(document.getElementById('dato').value)
.then(mensaje => alert(mensaje))
.catch(error => alert(error))
)
