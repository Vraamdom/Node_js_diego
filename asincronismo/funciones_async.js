const proceso1 = async() =>{
    //setTimeout es para poner un proceso en espera
    let suma1= 0
    return new Promise( (resolve, reject) => setTimeout(() =>{
        for(let i = 0; i<=5000; i++){
            suma1+=i

        }
        resolve(`La suma es  ${suma1}`);

    }, 5000)//el 10 representa el retraso en segundos del proceso-*
    )

}
const proceso2 = async() =>{
    let suma1= 0
    return new Promise( (resolve, reject) => setTimeout(() =>{
        for(let i = 0; i<=8000; i++){
            suma1+=i

        }
        resolve(`La suma es  ${suma1}`);

    }, 4000)
    )

}
const proceso3 = async() =>{
    let suma1= 0
    return new Promise( (resolve, reject) => setTimeout(() =>{
        for(let i = 0; i<=6000; i++){
            suma1+=i

        }
        resolve(`La suma es  ${suma1}`);

    }, 10)
    )

}
document.querySelector('#btnBuscar')
.addEventListener('click', () => {
   proceso1().then(mensaje => console.log(mensaje))
   proceso2().then(mensaje => console.log(mensaje))
   proceso3().then(mensaje => console.log(mensaje))
})