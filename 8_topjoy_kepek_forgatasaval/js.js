"use strict";

const kupak = document.querySelector('#kep');
const szoveg = document.querySelector('#szoveg');
const tarolo = document.querySelector('.tarolo');

// console.log(kupak, szoveg, tarolo);
const uzik = [];
let isClosed = true;

window.addEventListener('DOMContentLoaded', async() => {
    try {
        const response = await fetch('./uzik.csv');
        // console.log(response);
        const text = await response.text();
        // console.log(text);

        const sorok = text.split('\n').map(sor => sor.trim());
        // console.log(sorok);

        sorok.forEach(sor => {
            uzik.push(sor);
        });
    } catch (error) {
        console.log(error)
    }
});
console.log(uzik);