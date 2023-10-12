const proceso1 = () =>{
    let suma1= 0
    for(let i = 0; i<=5000; i++){
        suma1+=i
    }
    alert("la suma de los número es: "+ suma1)
}
const proceso2 = () =>{
    let suma1= 0
    for(let i = 0; i<=8000; i++){
        suma1+=i
    }
    alert("la suma de los número es: "+ suma1)
}
const proceso3 = () =>{
    let suma1= 0
    for(let i = 0; i<=10000; i++){
        suma1+=i
    }
    alert("la suma de los número es: "+ suma1)
}
document.querySelector('#btnBuscar').addEventListener('click', () => {
    proceso1()
    proceso2()
    proceso3()
})