"strict";

const cards = document.querySelector('#cards');

const LISTA_URL = 'src/kepek.txt';
const IMG_MAPPA = 'img/';

window.addEventListener('DOMContentLoaded', loadCards);

async function loadCards() {
    try {
        const response = await fetch(LISTA_URL);
        //console.log(response);

        // if (!response.ok) {
        //     return alert('Nem sikerült betölteni!');
        // }

        const text = await response.text();
        //console.log(text);

        const files = text.split('\n').map(sor => sor.trim()).filter(sor => sor.length > 0);
        //console.log(files);

        if (files.length === 0) {
            return alert('A lista üres!');
        }

        cards.innerHTML = ''

        files.forEach((fileName, index) => {
            console.log(fileName);
            cards.appendChild(createCard(fileName, index))
        })

    } catch (error) {
        alert(`Hiba: ${error}`);
    }
};

function createCard(fileName, index) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = `${IMG_MAPPA}${fileName}`
    image.alt = `dog${index+1}`;

    const content = document.createElement('div');
    content.className = 'content';

    const h3 = document.createElement('h3');
    h3.textContent = `Kártya #${index+1}`;

    const p = document.createElement('p');
    p.textContent = `${index+1}.jpg`;

    content.append(h3, p);
    card.append(image, content);
    

    return card;
}

// <!-- <div class="card">
//                 <img src="../img/dog-1.jpg" alt="dog1">
//                 <div class="content">
//                     <h3>#1 Kártya</h3>
//                     <p>dog-1.jpg</p>
//                 </div>
//              </div> -->