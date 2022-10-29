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

document.querySelector('#popUpForm').style.display = 'none';
const overlay = document.getElementById('overlay');

document.querySelector('#add').onclick = function showForm () {
	document.querySelector('#popUpForm').style.display = 'grid';	
	overlay.classList.add('active');
	document.querySelector('#submit').onclick = function populateArray () {
		let title = document.querySelector('#title').value;
		let author = document.querySelector('#author').value;
		let pages = document.querySelector('#pages').value;
		let read = document.querySelector('#read').value;
		const newBook = new Book(title, author, pages, read)
		myLibrary[myLibrary.length] = newBook;
		document.querySelector('#popUpForm').style.display = 'none';
		createCard(title, author, pages, read)
		return myLibrary
		}
		console.log(myLibrary)
		overlay.classList.remove('active');
		document.querySelector('#title').value = "";
		document.querySelector('#author').value = "";
		document.querySelector('#pages').value = "";
		document.querySelector('#read').value = "";
		return myLibrary
}
let counter = 0;
function createCard (title, author, pages, read) {
	let card = document.createElement('form');
	card.setAttribute('class', 'card');
	card.id = 'card' + (counter);
	let titleText = document.createElement('h2');
	titleText.textContent = `${title}`;
	titleText.setAttribute = ('required');
	let authorText = document.createElement('p');
	authorText.textContent = `${author}`;
	let pagesText = document.createElement('p');
	pagesText.textContent = `${pages}`;
	let readText = document.createElement('p');
	readText.textContent = `${read}`;
	document.querySelector('#library').append(card)
	document.querySelector(`#card${counter}`).append(titleText)
	document.querySelector(`#card${counter}`).append(authorText)
	document.querySelector(`#card${counter}`).append(pagesText)
	document.querySelector(`#card${counter}`).append(readText)
	counter++;
	return counter;
}