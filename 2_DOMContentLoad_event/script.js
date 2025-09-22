// Városok listája
const cities = [
    { name: "Berlin", value: "berlin"},
    { name: "Tokyo", value: "tokyo" },
    { name: "Rio", value: "rio" },
    { name: "Nairobi", value: "nairobi" },
    { name: "Lisszabon", value: "lisbon" },
    { name: "Moszkva", value: "moscow" },
    { name: "Denver", value: "denver" },
    { name: "Stockholm", value: "stockholm" },
    { name: "Helsinki", value: "helsinki" },
    { name: "Professzor", value: "professor" },
];

const select = document.querySelector("#city");

window.addEventListener("DOMContentLoaded", betolt);

function betolt() {
    cities.forEach(city => {
        //console.table(city);
        const option = document.createElement("option")
        option.value = city.value;

        option.textContent = city.name;

        select.append(option);
    });
}

// Házi megoldani a képcserés funkciót