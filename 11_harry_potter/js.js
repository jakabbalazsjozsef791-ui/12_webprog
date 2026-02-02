"strict";
const characters = document.querySelector('#characters');

const HP_URL = 'https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json';

window.addEventListener('DOMContentLoaded',fetchCharacters);

async function fetchCharacters() {
    try {
        const response = await fetch(HP_URL);
        
        const chars = await response.json();

        displayCharacters(chars);
    } catch (error) {
        alert(error);
    }
}

function displayCharacters(chars) {
    // console.log(chars);

    chars.forEach(chars => {
        
    });
}