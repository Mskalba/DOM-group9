var button;
var list;
var paragraphs;
var paragraphs2;
var secondHeader;
var secondHeader2;

function main() {
    searchForElements();
    simpleModification();
    prepareDOMEvents();
}

function searchForElements() {
    button = document.getElementById('hello');
    list = document.getElementById('list');
    paragraphs = document.getElementsByClassName('special');
    paragraphs2 = document.querySelectorAll('div .special');
    secondHeader = document.querySelector('h2');
    secondHeader2 = document.getElementsByTagName('h2');
};

function simpleModification() {
    button.innerText = 'Add Element';
    secondHeader.style.color = 'red';
    button.classList.toggle('active');
    button.classList.add('cokolwiek');
}

function prepareDOMEvents() {
    button.addEventListener('click', addNewElementToList);
    list.addEventListener('click', listClickManager);
}

function addNewElementToList() {
    var newElement = document.createElement('li');
    newElement.color = 'green';
    newElement.innerText = 'Nowy element';

    var newButton = document.createElement('button');
    newButton.innerText = 'Przycisk';


    // newElement === <li>NowyElement</li>
    newElement.appendChild(newButton);
    // newElement === <li>NowyElement<button>Przycisk</button> </li>

    list.appendChild(newElement);
}

function listClickManager(eventObject) {
    if(eventObject.target.tagName === 'BUTTON') {
        console.log('kliknales przycisk')
    } else {
        eventObject.target.remove();
    }
}

document.addEventListener('DOMContentLoaded', main);