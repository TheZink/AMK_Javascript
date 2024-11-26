'use strict';

const first = document.querySelector('input[name=firstname]');
const last = document.querySelector('input[name=lastname]');
const submit = document.querySelector('input[type=submit]')

function your_name(event) {
    document.querySelector('target').innerHTML = `Sinun nimesi on ${first} ${last}`
}

submit.addEventListener('click', your_name);
