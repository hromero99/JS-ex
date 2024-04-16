
class Persona{

	constructor(name,surnames,dni){
		this.name = name
		this.surnames = surnames
		this.dni = dni
	}

	sayHello(){
		console.log("Hello")
	}

	setDni(newDni){
		// Esta funcion se encarga de asignar valores (DNI) dentro del objeto (porque hablamos de un valor concreto)
		// y por lo tanto no devuelve nada 

		if (newDni.length < 9){
			throw "DNI Invalido" // Excepciones
		}else{
			this.dni = newDni
		}

	}
	getDni(){
		return this.dni
	}

}
