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
};

function displayCharacters(chars) {
    // console.log(chars);
    if (!chars) {
        return alert('A tömböt elfelejtetted elküldeni')
    }

    chars.forEach(char => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = char.image;
        img.alt = char.name;

        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = char.name || 'Unknown';

        const house = document.createElement('div');
        house.textContent = `Ház: ${char.house || 'Unknown'}`

        const year = document.createElement('div');
        year.textContent = `Születési év: ${char.yearOfBirth || 'Unknown'}`

        const actor = document.createElement('div');
        actor.textContent = `Színész ${char.actor || 'Unknown'}`

        card.append(img, name, house, year, actor);

        characters.append(card);
    });
};

function fixImageUrl(url) {
    if (!url) {
        return ""
    }

    return url.replace('http://hp-api.herokuapp.com', 'https://hp-api.onrender.com');
    //.replace('http://hp-api.herokuapp.com', 'https://hp-api.onrender.com'); .replace('http://', 'https://');
};