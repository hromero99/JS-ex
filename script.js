const bookList = [];
let booksFiltered = bookList;

const request = fetch("https://fakerapi.it/api/v1/books?_quantity=200").then(
	(apiResponse) => {
		console.log(apiResponse);
		if (apiResponse.ok) {
			apiResponse.json().then((jsonData) => {
				booksFiltered = jsonData.data;
				getGenerosAutores(jsonData.data);
				writeBookInHTml(jsonData.data);
			});
		} else {
			alert("En la API ha habido un error");
		}
	},
	(apiError) => {
		console.log("ERROR");
	}
);

const root = document.getElementById("root");
const buttons = document.getElementById("buttons");

const writeBookInHTml = (bookList) => {
	root.innerHTML = "";
	bookList.forEach((book) => {
		const parraf = document.createElement("p");
		parraf.innerText = book.title;
		root.appendChild(parraf);
	});
};

const generos = [];
const autores = [];

const getGenerosAutores = (bookList) => {
	for (let index = 0; index < bookList.length; index++) {
		let book = bookList[index];

		if (generos.includes(book.genre) === false) {
			generos.push(book.genre);
			const button = document.createElement("button");
			button.innerText = book.genre;
			let genero = book.genre;
			button.addEventListener("click", () => {
				writeBookInHTml(
					bookList.filter((book) => book.genre === genero)
				);
			});
			buttons.appendChild(button);
		}

		if (!autores.includes(book.author)) autores.push(book.author);
	}
};

console.log(generos);
console.log(autores);

const search = document.getElementById("searchIsbn");
search.addEventListener("change", (event) => {
	let userInput = event.target.value;
	writeBookInHTml(
		booksFiltered.filter((book) => book.isbn.includes(userInput))
	);
});

const genreSelector = document.getElementById("genreSelector");
const authorSelector = document.getElementById("authorSelector");
const searchForm = document.getElementById("searchForm");
generos.forEach((genero) => {
	const option = document.createElement("option");
	option.value = genero;
	option.innerText = genero;
	genreSelector.appendChild(option);
});
genreSelector.addEventListener("change", (event) => {
	let autores = [];
	authorSelector.innerHTML = "";
	bookList
		.filter((book) => book.genre === event.target.value)
		.forEach((bookFiltered) => {
			if (autores.includes(bookFiltered.author) === false) {
				const option = document.createElement("option");
				option.value = bookFiltered.author;
				option.innerText = bookFiltered.author;
				authorSelector.appendChild(option);
				autores.push(bookFiltered.author);
			}
		});
});

searchForm.addEventListener("submit", (event) => {
	event.preventDefault();
	booksFiltered = bookList.filter(
		(book) =>
			book.author === event.target.author.value &&
			book.genre === event.target.genre.value
	);
	writeBookInHTml(
		bookList.filter(
			(book) =>
				book.author === event.target.author.value &&
				book.genre === event.target.genre.value
		)
	);
});

//writeBookInHTml(bookList);
