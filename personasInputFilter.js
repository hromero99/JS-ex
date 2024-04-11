const personas = [
	{
		id: 1,
		firstname: "Carol",
		lastname: "Dickens",
		email: "percival30@feil.info",
		phone: "+1600318975251",
		birthday: "2019-08-17",
		gender: "male",
		address: {
			id: 0,
			street: "558 O'Conner Mission Suite 570",
			streetName: "Senger Shore",
			buildingNumber: "7569",
			city: "Lonzostad",
			zipcode: "13139",
			country: "Bahrain",
			county_code: "VI",
			latitude: 56.186027,
			longitude: 67.762372,
		},
		website: "http://stokes.org",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 2,
		firstname: "Berry",
		lastname: "Carroll",
		email: "schinner.pat@fisher.com",
		phone: "+8325672523970",
		birthday: "2021-08-22",
		gender: "male",
		address: {
			id: 0,
			street: "8596 Johnston Overpass",
			streetName: "Jewel Centers",
			buildingNumber: "359",
			city: "Albertaburgh",
			zipcode: "28492",
			country: "Micronesia",
			county_code: "AU",
			latitude: -78.89921,
			longitude: 92.773206,
		},
		website: "http://klocko.net",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 3,
		firstname: "Santiago",
		lastname: "Rolfson",
		email: "ktrantow@schroeder.com",
		phone: "+7668259688277",
		birthday: "2011-11-27",
		gender: "male",
		address: {
			id: 0,
			street: "336 Glover Meadows",
			streetName: "Marilie Plaza",
			buildingNumber: "246",
			city: "Tayaland",
			zipcode: "52500",
			country: "Tokelau",
			county_code: "SX",
			latitude: -9.049487,
			longitude: -159.650871,
		},
		website: "http://beier.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 4,
		firstname: "Johann",
		lastname: "Cummerata",
		email: "torphy.london@schuppe.com",
		phone: "+4588446853009",
		birthday: "2009-02-15",
		gender: "male",
		address: {
			id: 0,
			street: "88969 Kuhlman Trafficway",
			streetName: "Heaney Turnpike",
			buildingNumber: "1433",
			city: "Port Daishaberg",
			zipcode: "87257",
			country: "Barbados",
			county_code: "GM",
			latitude: 33.571682,
			longitude: 63.645643,
		},
		website: "http://schneider.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 5,
		firstname: "Jean",
		lastname: "Stanton",
		email: "koss.pierce@hotmail.com",
		phone: "+8415595703912",
		birthday: "2021-01-26",
		gender: "male",
		address: {
			id: 0,
			street: "544 Domenica Prairie",
			streetName: "Pamela Tunnel",
			buildingNumber: "5169",
			city: "Tressafort",
			zipcode: "36335",
			country: "Macedonia",
			county_code: "KM",
			latitude: -1.639247,
			longitude: 105.749802,
		},
		website: "http://ferry.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 6,
		firstname: "Adrain",
		lastname: "Dooley",
		email: "beth96@hotmail.com",
		phone: "+9730028189631",
		birthday: "2023-12-28",
		gender: "male",
		address: {
			id: 0,
			street: "75341 Carmella Meadows Suite 405",
			streetName: "Elaina Street",
			buildingNumber: "18272",
			city: "New Orlostad",
			zipcode: "56219-1642",
			country: "Mexico",
			county_code: "BQ",
			latitude: -83.046868,
			longitude: -75.91527,
		},
		website: "http://grimes.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 7,
		firstname: "Angelo",
		lastname: "Prosacco",
		email: "pherman@gleichner.com",
		phone: "+5695952783493",
		birthday: "2012-10-01",
		gender: "male",
		address: {
			id: 0,
			street: "8474 Koss Crest Suite 097",
			streetName: "Lucas Lakes",
			buildingNumber: "6978",
			city: "Tomasaton",
			zipcode: "96724",
			country: "China",
			county_code: "TG",
			latitude: 89.568399,
			longitude: 161.370214,
		},
		website: "http://brekke.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 8,
		firstname: "Max",
		lastname: "Pagac",
		email: "apaucek@cronin.com",
		phone: "+9262466542455",
		birthday: "2005-07-19",
		gender: "male",
		address: {
			id: 0,
			street: "954 Adams Trafficway Suite 457",
			streetName: "Denesik Unions",
			buildingNumber: "1723",
			city: "New Esmeraldamouth",
			zipcode: "08822-4879",
			country: "Sri Lanka",
			county_code: "IQ",
			latitude: -5.378929,
			longitude: -50.069026,
		},
		website: "http://breitenberg.net",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 9,
		firstname: "Rogers",
		lastname: "Jones",
		email: "mittie85@gmail.com",
		phone: "+9651780802842",
		birthday: "2008-08-06",
		gender: "male",
		address: {
			id: 0,
			street: "916 Kozey Grove Apt. 165",
			streetName: "Mallory Estates",
			buildingNumber: "515",
			city: "East Bobbieberg",
			zipcode: "67672",
			country: "Peru",
			county_code: "NA",
			latitude: 17.518257,
			longitude: -102.682646,
		},
		website: "http://dickinson.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 10,
		firstname: "Rico",
		lastname: "Roob",
		email: "caesar66@yahoo.com",
		phone: "+3006069513800",
		birthday: "2009-10-24",
		gender: "male",
		address: {
			id: 0,
			street: "5142 Hoyt Mall",
			streetName: "Rice Circle",
			buildingNumber: "524",
			city: "West Darianburgh",
			zipcode: "41163-5372",
			country: "Monaco",
			county_code: "TG",
			latitude: 69.597037,
			longitude: 110.582985,
		},
		website: "http://mertz.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 11,
		firstname: "Ahmad",
		lastname: "Labadie",
		email: "manley.osinski@heathcote.info",
		phone: "+4132061515109",
		birthday: "2020-12-16",
		gender: "male",
		address: {
			id: 0,
			street: "9625 Izabella Mountains",
			streetName: "Judy Unions",
			buildingNumber: "58919",
			city: "Naomieborough",
			zipcode: "35554",
			country: "Saint Martin",
			county_code: "BE",
			latitude: 47.524991,
			longitude: 21.904434,
		},
		website: "http://blick.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 12,
		firstname: "Karley",
		lastname: "Gislason",
		email: "witting.dedrick@yahoo.com",
		phone: "+5274176277314",
		birthday: "2014-11-21",
		gender: "male",
		address: {
			id: 0,
			street: "4062 Kobe Hollow",
			streetName: "Arlene Highway",
			buildingNumber: "140",
			city: "Ritchieville",
			zipcode: "52765",
			country: "Ireland",
			county_code: "BL",
			latitude: 69.473644,
			longitude: 10.621438,
		},
		website: "http://bailey.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 13,
		firstname: "Dan",
		lastname: "Rohan",
		email: "katheryn.lindgren@grady.com",
		phone: "+1575730642690",
		birthday: "2013-09-07",
		gender: "male",
		address: {
			id: 0,
			street: "69052 Joanne Haven",
			streetName: "Kiehn Plain",
			buildingNumber: "17016",
			city: "North Samarachester",
			zipcode: "98682-5087",
			country: "Vietnam",
			county_code: "RU",
			latitude: -48.346826,
			longitude: 128.651323,
		},
		website: "http://price.biz",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 14,
		firstname: "Walton",
		lastname: "Witting",
		email: "greilly@cruickshank.net",
		phone: "+8006641439166",
		birthday: "2007-05-20",
		gender: "male",
		address: {
			id: 0,
			street: "5129 Moen Islands",
			streetName: "Elton Harbor",
			buildingNumber: "472",
			city: "East Ashley",
			zipcode: "77161-6201",
			country: "Sri Lanka",
			county_code: "KW",
			latitude: -21.047703,
			longitude: -43.150352,
		},
		website: "http://ruecker.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 15,
		firstname: "Russell",
		lastname: "Rohan",
		email: "karley63@gmail.com",
		phone: "+5269424779898",
		birthday: "2012-05-26",
		gender: "male",
		address: {
			id: 0,
			street: "72105 Morton Ramp",
			streetName: "Jordy Plains",
			buildingNumber: "333",
			city: "East Nakiahaven",
			zipcode: "89406",
			country: "Bahamas",
			county_code: "GF",
			latitude: 56.273895,
			longitude: -8.050592,
		},
		website: "http://connelly.org",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 16,
		firstname: "Clint",
		lastname: "Abshire",
		email: "effertz.alejandrin@dicki.com",
		phone: "+7523558585423",
		birthday: "2017-10-09",
		gender: "male",
		address: {
			id: 0,
			street: "1858 Weimann Island",
			streetName: "Schinner Divide",
			buildingNumber: "574",
			city: "Port Earlinestad",
			zipcode: "82168",
			country: "Seychelles",
			county_code: "TN",
			latitude: -12.298677,
			longitude: 97.761133,
		},
		website: "http://braun.biz",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 17,
		firstname: "Marcelo",
		lastname: "Klein",
		email: "dtoy@hotmail.com",
		phone: "+9638964078152",
		birthday: "2015-06-03",
		gender: "male",
		address: {
			id: 0,
			street: "16727 Quigley Club Apt. 930",
			streetName: "Kirlin Forges",
			buildingNumber: "74292",
			city: "South Wellingtonside",
			zipcode: "42226-7335",
			country: "Zambia",
			county_code: "FI",
			latitude: -38.000124,
			longitude: 31.095097,
		},
		website: "http://glover.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 18,
		firstname: "Jeromy",
		lastname: "Keeling",
		email: "buck10@labadie.com",
		phone: "+9566978308145",
		birthday: "2015-07-30",
		gender: "male",
		address: {
			id: 0,
			street: "9176 Heloise Path Suite 190",
			streetName: "Trey Mission",
			buildingNumber: "5130",
			city: "Carissaton",
			zipcode: "67883",
			country: "South Africa",
			county_code: "AW",
			latitude: -76.069699,
			longitude: 103.606011,
		},
		website: "http://terry.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 19,
		firstname: "Frederic",
		lastname: "D'Amore",
		email: "bokeefe@kulas.com",
		phone: "+4841580429222",
		birthday: "2008-02-29",
		gender: "male",
		address: {
			id: 0,
			street: "3173 Penelope Loaf Apt. 693",
			streetName: "Willms Cove",
			buildingNumber: "757",
			city: "McClureland",
			zipcode: "77543",
			country: "Christmas Island",
			county_code: "AQ",
			latitude: -30.612441,
			longitude: 21.046011,
		},
		website: "http://bednar.com",
		image: "http://placeimg.com/640/480/people",
	},
	{
		id: 20,
		firstname: "Brent",
		lastname: "Fadel",
		email: "kuvalis.edwina@hill.com",
		phone: "+7579091292425",
		birthday: "2014-12-08",
		gender: "male",
		address: {
			id: 0,
			street: "90111 Yost Mill",
			streetName: "Schinner Plain",
			buildingNumber: "706",
			city: "West Cortneymouth",
			zipcode: "23510-2358",
			country: "Tanzania",
			county_code: "SI",
			latitude: -6.877483,
			longitude: 116.392464,
		},
		website: "http://sauer.net",
		image: "http://placeimg.com/640/480/people",
	},
];
let personasParaMostrar = personas;
const root = document.getElementById("root");
const searchInput = document.getElementById("name");
const createHtmlFromPerson = (persona) => {
	const parraf = document.createElement("p");
	const deleteButton = document.createElement("button");
	deleteButton.id = persona.id;
	deleteButton.addEventListener("click", (event) => {
		console.log("ASD");
		console.log(event.target.id);
		root.innerHTML = "";
		personasParaMostrar = personasParaMostrar.filter(
			(persona) => persona.id != event.target.id
		);

		personasParaMostrar.forEach((persona) => {
			createHtmlFromPerson(persona);
		});
	});
	parraf.innerText = `${persona.firstname} ${persona.lastname}`;
	root.appendChild(deleteButton);
	root.appendChild(parraf);
};

personas.forEach((persona) => {
	createHtmlFromPerson(persona);
});

searchInput.addEventListener("change", (event) => {
	let textoDelUsuario = event.target.value;
	root.innerHTML = "";
	if (textoDelUsuario === ""){
		personas.forEach((persona) => {
			createHtmlFromPerson(persona);
		});
	}
	else{
		personasParaMostrar = personasParaMostrar.filter(
			(persona) =>  persona.firstname.includes(textoDelUsuario)
		);
		personasParaMostrar.forEach((persona) => {
			createHtmlFromPerson(persona);
		});
	}

});
