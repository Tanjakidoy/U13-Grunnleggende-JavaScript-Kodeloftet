// DOM MANIPULATION

// const betyr kontant variabel
// fillInText betyr et variabel navn
// = betyr å erklære noe
// document betyr HTML dokumentet
// .getElementById betyr at vi henter et element med en ID
// ('fillInText') betyr id-navnet vi har hentet


/* Eksempel på en variabel som lagrer at vi henter et elment
med ID-navnet fillInText fra HTML */

const fillInText = document.getElementById('fillInText');
console.log(fillInText);

fillInText.textContent = 'Jeg er tekst hentet fra JavaScript!';

const changeColor = document.getElementById('changeColor');
console.log(changeColor);

function changeColorFunction() {
  changeColor.classList.toggle('blue');
}

changeColor.addEventListener('click', changeColorFunction);