const numeros = []
const pares = []
const impares = []

for (let index = 0; index <= 100; index++) {
    numeros.push(Math.floor(Math.random() * 100))    
}

for (let index = 0; index < numeros.length; index++) {
    if ( numeros[index]%2 === 0)
        pares.push(numeros[index])
    else
        impares.push(numeros[index])
}
console.log(pares)
console.log(impares)