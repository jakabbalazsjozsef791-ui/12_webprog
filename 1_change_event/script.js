const cities = document.querySelector('#cities');

cities.addEventListener('change', () => {
    const selected = cities.value;
    console.log(selected);
    
    // a demo azonosítóba beírjuk a kiválasztott város value-t
    const demo = document.querySelector('#demo');
    demo.textContent = selected;

    // beillesztjük a megfelelő képet
    const image = document.querySelector('#image');
    const img = document.createElement('img');
    img.src = `./img/${selected}.jpg`;
    img.alt = selected;
    img.title = selected;
    console.log(img);

    image.replaceChildren(img);
    
});