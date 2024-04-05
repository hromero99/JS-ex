/*
Quita los simbolos de la frase y encuentra la palabra mas usada
*/
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const simbolos = ["%","$",";","@",".","!",";","#","?",",","&"]

const sentence_array = sentence.split(" ")

const palabras = []

for (let index = 0; index < sentence_array.length; index++) {
    let palabra = sentence_array[index]
    let numero_caracteres = 0

    for (let posicionLetra = 0; posicionLetra < palabra.length; posicionLetra++) {
        //AQUI HABLAMOS DE LETRAS
        let letra = palabra[posicionLetra]
        if(simbolos.includes(letra)){
            palabra = palabra.replace(letra,"")
        
        }
    }
    palabras.push(palabra)
}
console.log(palabras)