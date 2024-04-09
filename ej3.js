const data = [
	{
		"id": 1,
		"firstname": "Hector",
		"lastname": "Julien",
		"email": "vallet.eugene@noos.fr",
		"phone": "+5109160268056",
		"birthday": "1981-11-13",
		"gender": "female",
		"address": {
			"id": 0,
			"street": "99, rue Labbe",
			"streetName": "place Imbert",
			"buildingNumber": "26",
			"city": "Leclercq-sur-Raynaud",
			"zipcode": "77 231",
			"country": "Ghana",
			"county_code": "PN",
			"latitude": -9.516893,
			"longitude": 82.740856
		},
		"website": "http://humbert.com",
		"image": "http://placeimg.com/640/480/people"
	},
	{
		"id": 2,
		"firstname": "Odette",
		"lastname": "Bonneau",
		"email": "martin.millet@ifrance.com",
		"phone": "+5289858020588",
		"birthday": "1946-09-24",
		"gender": "female",
		"address": {
			"id": 0,
			"street": "833, impasse Alain Arnaud",
			"streetName": "chemin Jacques Bonnin",
			"buildingNumber": "6",
			"city": "Bonnet",
			"zipcode": "84 863",
			"country": "Tunisie",
			"county_code": "LS",
			"latitude": 56.883101,
			"longitude": -15.200751
		},
		"website": "http://herve.net",
		"image": "http://placeimg.com/640/480/people"
	},
	{
		"id": 3,
		"firstname": "Franck",
		"lastname": "Jean",
		"email": "antoine.pruvost@camus.org",
		"phone": "+9942448958977",
		"birthday": "1956-08-02",
		"gender": "male",
		"address": {
			"id": 0,
			"street": "86, chemin Alexandre",
			"streetName": "boulevard Fernandez",
			"buildingNumber": "76",
			"city": "Blanc",
			"zipcode": "45730",
			"country": "Bahrain",
			"county_code": "MX",
			"latitude": -33.092096,
			"longitude": -17.53356
		},
		"website": "http://bonnin.org",
		"image": "http://placeimg.com/640/480/people"
	},
	{
		"id": 4,
		"firstname": "Yves",
		"lastname": "Guillaume",
		"email": "klein.danielle@free.fr",
		"phone": "+2441886750696",
		"birthday": "1971-07-20",
		"gender": "male",
		"address": {
			"id": 0,
			"street": "72, impasse Franck Huet",
			"streetName": "impasse Gillet",
			"buildingNumber": "62",
			"city": "Chauvin-sur-Leclercq",
			"zipcode": "91 319",
			"country": "Cor\u00e9e du Nord",
			"county_code": "SS",
			"latitude": 41.868855,
			"longitude": -113.61381
		},
		"website": "http://marie.fr",
		"image": "http://placeimg.com/640/480/people"
	},
	{
		"id": 5,
		"firstname": "Olivier",
		"lastname": "Lefort",
		"email": "andree36@club-internet.fr",
		"phone": "+8767765303245",
		"birthday": "1938-06-27",
		"gender": "male",
		"address": {
			"id": 0,
			"street": "66, rue Michelle Costa",
			"streetName": "chemin de Lucas",
			"buildingNumber": "23",
			"city": "Gaudin-sur-Bodin",
			"zipcode": "32296",
			"country": "Madagascar",
			"county_code": "IM",
			"latitude": -74.989737,
			"longitude": -122.345243
		},
		"website": "http://gaillard.com",
		"image": "http://placeimg.com/640/480/people"
	},
	{
		"id": 6,
		"firstname": "Val\u00e9rie",
		"lastname": "Delmas",
		"email": "penelope.robert@yahoo.fr",
		"phone": "+3523805025464",
		"birthday": "1941-08-04",
		"gender": "female",
		"address": {
			"id": 0,
			"street": "93, rue Marie",
			"streetName": "impasse Nath Chretien",
			"buildingNumber": "47",
			"city": "MauriceBourg",
			"zipcode": "81 549",
			"country": "Liechtenstein",
			"county_code": "SE",
			"latitude": -73.228572,
			"longitude": 137.995544
		},
		"website": "http://lebon.org",
		"image": "http://placeimg.com/640/480/people"
	},
	{
		"id": 7,
		"firstname": "Vincent",
		"lastname": "Dos Santos",
		"email": "mary.michel@club-internet.fr",
		"phone": "+1977700117415",
		"birthday": "2023-09-22",
		"gender": "male",
		"address": {
			"id": 0,
			"street": "1, rue de Andre",
			"streetName": "rue Humbert",
			"buildingNumber": "26",
			"city": "Guilletnec",
			"zipcode": "89 989",
			"country": "Marshall (\u00celes)",
			"county_code": "PH",
			"latitude": 25.117105,
			"longitude": -71.700188
		},
		"website": "http://joubert.com",
		"image": "http://placeimg.com/640/480/people"
	},
	{
		"id": 8,
		"firstname": "Antoinette",
		"lastname": "Lelievre",
		"email": "marianne.bertin@wanadoo.fr",
		"phone": "+3921816799483",
		"birthday": "2022-02-17",
		"gender": "female",
		"address": {
			"id": 0,
			"street": "47, impasse Thomas Hebert",
			"streetName": "impasse de Gaudin",
			"buildingNumber": "633",
			"city": "Roche",
			"zipcode": "74565",
			"country": "Sainte H\u00e9l\u00e8ne",
			"county_code": "PS",
			"latitude": -87.553677,
			"longitude": -59.453459
		},
		"website": "http://pasquier.com",
		"image": "http://placeimg.com/640/480/people"
	},
	{
		"id": 9,
		"firstname": "Charlotte",
		"lastname": "Marion",
		"email": "susan.caron@voila.fr",
		"phone": "+4965916709063",
		"birthday": "1999-12-29",
		"gender": "female",
		"address": {
			"id": 0,
			"street": "85, rue Germain",
			"streetName": "chemin de Pineau",
			"buildingNumber": "47",
			"city": "BoucherVille",
			"zipcode": "71639",
			"country": "Hong Kong",
			"county_code": "MP",
			"latitude": -88.043443,
			"longitude": -151.418436
		},
		"website": "http://vidal.fr",
		"image": "http://placeimg.com/640/480/people"
	},
	{
		"id": 10,
		"firstname": "Paulette",
		"lastname": "Gomes",
		"email": "eric.paul@fernandez.fr",
		"phone": "+2260706501365",
		"birthday": "2002-03-28",
		"gender": "female",
		"address": {
			"id": 0,
			"street": "58, impasse de Robin",
			"streetName": "rue Beno\u00eet Allard",
			"buildingNumber": "552",
			"city": "Torresdan",
			"zipcode": "77385",
			"country": "S\u00e9n\u00e9gal",
			"county_code": "EG",
			"latitude": 12.519065,
			"longitude": -20.049705
		},
		"website": "http://bruneau.fr",
		"image": "http://placeimg.com/640/480/people"
	}
]

/*Agrupar a las personas que viven en una direccion con un 8 en el codigo postal */
/*
let people = []
data.forEach((personaInfo) => {
	let zip = personaInfo["address"]["zipcode"]
	if (zip.includes("3"))
		people.push(personaInfo)
}) */

let people = data.filter((personaInfo) => personaInfo["address"]["zipcode"].includes("9"))

const root = document.getElementById("root")
console.log(root)
people.forEach((personaInfo) => {
	const nameParraf = document.createElement("p")
	nameParraf.classList.add("nameText")
	nameParraf.innerText = `Nombre: ${personaInfo.firstname} ${personaInfo.lastname}`
	root.appendChild(nameParraf)
})

 

