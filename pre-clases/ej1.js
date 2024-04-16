// Prueba si un dia es fin de semana o dia laborable

/*
 Es un condicional entenoce usamos
  - if - else if - else
  - switch - case 
*/

let input = prompt("Introduce el mensaje")
input = input.toLocaleLowerCase()
console.log(input)

if (input === "sabado" || input === "domingo"){
    console.log("fin de semana")
}else if(input === "lunes" ||input === "marter" ||input === "miercoles" ||input === "jueves" ||input === "viernes" ){
    console.log("dia laborable")
}
else{
    alert("Invalido")
}