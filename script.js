let myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		console.log(`${title} by ${author}, ${pages}, ${read}`)
	}
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages', 'read: yes');
const theWayOfZen = new Book('The Way of Zen', 'Alan Watts', '232 pages', 'read: yes');
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', '304 pages', 'read: no');

myLibrary[0] = theHobbit;
myLibrary[1] = theWayOfZen;
myLibrary[2] = harryPotter;

// const body = document.body;

// function addBook (title, author) {
// 	let newBook = document.createElement('div');
// 	this.title = title;
// 	this.author = author;
// 	document.getElementById('library').appendChild(newBook);
// 	newBook.innerText = `${title} by ${author}`;
// 	console.log(library); 
// 	return newBook
// }

function createForm () {
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("id", "form");
	var title = document.createElement("input");
	title.setAttribute("type", "text");
	title.setAttribute("name", "title");
	var author = document.createElement("input");
	author.setAttribute("type", "text");
	author.setAttribute("name", "author");
	var s = document.createElement("button"); 
	s.setAttribute("id", 's');
	s.textContent = 'Submit'
	document.body.appendChild(form)
	document.querySelector('#form').append(title)
	document.querySelector('#form').append(author)
	document.querySelector('body').append(s)
}

createForm();

let array =[];
document.querySelector('#s').onclick = function populateArray () {
	let title = document.getElementsByName('title').value;
	let author = document.getElementsByName('author').value;
	array[0] = title;
	array[1] = author; 
	console.log(array);
}


// document.querySelector('#s').onclick = function populateArray () {
// 	let titleVar = document.getElementsByName("title")[0].value;
// 	var authorVar = document.getElementsByName("author")[0].value;
// 	console.log(titleVar)
// 	console.log(authorVar)
// }

// function addBook () {
// 	myLibrary[myLibrary.length] = new Book(title, author, pages, read);
// 	return myLibrary
// }

// let add = document.querySelector('#add');
// add.addEventListener('mousedown', addBook);

// addBook('Tribe', 'Sebastian Junger', '156 pages', 'read: yes');
// console.log(myLibrary)

