const Alejandro = new Persona("Alejandro", "Luis Acosta", 1);
console.log(Alejandro);
console.log(Alejandro.name);

try {
	const Lucia = new Estudiante("Lucia", "Macho Sanchez", 2, "Mod 2", "34");
	console.log(Lucia);
} catch (error) {
	console.log(error);
}

const request = fetch(
	// Esto es un html entonces entra en PROBLEMAS CON LA INFO"https://api.ratick.hromerol.es/admin"
    "https://fakerapi.it/api/v1/credit_cards?_quantity=100"
)
	.then((response) => {
		if (response.ok) {
			response
				.json()
				.then((jsonData) => {})
				.catch((error) => alert("Problemas con la info de la API"));
		}
	})
	.catch((error) => alert("Error en la api"));

