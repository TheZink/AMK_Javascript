'use strict';

let times = prompt('Kuinka monta pelaajaa?: ');
let names = [];

for (let i = 1; i <= times; i++) {
    let name = prompt(`Anna ${i} nimi:`);
    names.push(name);
}

names.sort();

for (let player in names) {
    const print = 'Toimiiko';
    document.getElementById('#name').innerHTML += print;
}