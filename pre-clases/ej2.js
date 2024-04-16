/*
¿Que nos pide el ejercicio?

Tenemos que filtrar de una lista de compañias Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
aquellas que tengan mas de una O dentro del nombre.

1. Saber donde se encuentra cada empresa en array. Es decir, tenemos que ir empresa a empresa mirando cual es el nombre
    ** Iterar sobre cada elemento del array**
    Ir uno a uno dentro de los elementos.

*/

const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]


//Vamos a ir compañia a compañia dentro de nuestro ARRAY
for (let posicionCompañia = 0; posicionCompañia < companies.length; posicionCompañia++) {
    // Vamos a ir letra por letra para ver si tiene O
    //AQUI HABLAMOS DE PALABRAS 
    let company = companies[posicionCompañia] // Vamos a tener Facebook, Google ....
    let numero_de_o = 0

    for (let posicionLetra = 0; posicionLetra < company.length; posicionLetra++) {
        //AQUI HABLAMOS DE LETRAS
        let letra = company[posicionLetra]
        
        if (letra === "o"){
            numero_de_o = numero_de_o + 1   
        }
    }
    //VOLVEMOS A LA PALABRA

    if (numero_de_o > 1)
        console.log(company)

}
