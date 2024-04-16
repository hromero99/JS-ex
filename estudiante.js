

class Estudiante extends Persona {

    constructor(name,surnames,dni,modulo,nivel){
        super(name,surnames,dni)
        this.modulo = modulo
        /*
        this.nivel = this.setNivel(nivel)
        aqui el nivel sería undefined porque evalua el resultado de this.setNivel, el problema
        es que setNivel nunca tiene un return, al no tener return siempre tiene valor de undefined
        */
       this.setNivel(nivel)
    }

    getModuloDocument(){
        //Este ejmplo seria para consumir una API donde accediera (o no) a los documentos
        // dependiendo del módulo
        if (this.modulo < 3){
            return "Informacion mod 1 y mod 2"
        }
    }

    setNivel(newNivel){
        const niveles = ["Principiante","Intermedio","Avanzado"]
        if (niveles.includes(newNivel)){
            console.log(newNivel)
            this.nivel = newNivel
        }
        else{
            throw "Nivel del estudiante incorrecto"
        }
    }
}