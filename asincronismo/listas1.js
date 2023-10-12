var lista1 = [12,23,34,56]
var lista2 = [3,4,5,6]
var lista3 = [43,41,42,44]
var lista4 = [55,53,54,51]
let encontrado = false;

const buscarLista1 = (dato) =>{
    let documento1 = '';
        for(let i = 0; i<lista1.length; i++){
        if(dato == lista1[i]){
            encontrado = true;
            documento1 = lista1[i]
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if(encontrado){
            resolve('El documento con numero ' + documento1 + ' fue encontrado en la lista 1')
        }else{
            reject('No se encontro el dato')
        }
    }, 20)
    )
}
const buscarLista2 = (dato) =>{
    let documento2 = '';
        for(let i = 0; i<lista2.length; i++){
        if(dato == lista2[i]){
            encontrado = true;
            documento2 = lista2[i]
        }
    }
    return new Promise((resolve, reject) => setTimeout(() =>{
        if(encontrado){
            resolve('El documento con numero ' + documento2 + ' fue encontrado en la lista 2')
        }else{
            reject('No se encontro el dato')
        }
    }, 20)
    )
}
const buscarLista3 = (dato) =>{
    let documento3 = '';
    for(let i = 0; i<lista3.length; i++){
    if(dato == lista3[i]){
        encontrado = true;
        documento3 = lista3[i]
    }
}
return new Promise((resolve, reject) => setTimeout(() =>{
    if(encontrado){
        resolve('El documento con numero ' + documento3 + ' fue encontrado en la lista 3')
    }else{
        reject('No se encontro el dato')
    }
}, 20)
)
}
const buscarLista4 = (dato) =>{
    let documento4 = '';
    for(let i = 0; i<lista4.length; i++){
    if(dato == lista4[i]){
        encontrado = true;
        documento4 = lista4[i]
    }
}
return new Promise((resolve, reject) => setTimeout(() =>{
    if(encontrado){
        resolve('El documento con numero ' + documento4+ ' fue encontrado en la lista 4')
    }else{
        reject('No se encontro el dato')
    }
}, 20)
)
}
document.querySelector('#btnBuscar')
.addEventListener('click', () =>{
    buscarLista1(document.getElementById('dato').value).then(mensaje => console.log(mensaje))
    buscarLista1(document.getElementById('dato').value).catch(error => console.log(error)) 

    buscarLista2(document.getElementById('dato').value).then(mensaje => console.log(mensaje))
    buscarLista2(document.getElementById('dato').value).catch(error => console.log(error)) 

    buscarLista3(document.getElementById('dato').value).then(mensaje => console.log(mensaje))
    buscarLista3(document.getElementById('dato').value).catch(error => console.log(error)) 

    buscarLista4(document.getElementById('dato').value).then(mensaje => console.log(mensaje))
    buscarLista4(document.getElementById('dato').value).catch(error => console.log(error)) 
})



 
