const cities=[]; //to store city details
const url="cities.json"; //url of json containing data

fetch(url)
    .then(data => data.json())
    .then(value => cities=[...value]); //to store city details from json in "cities" array

const input = document.querySelector(".input-field"); //to access user input
const result = document.querySelector(".suggestion"); //to access suggestions dropdown

input.addEventListener("keyup",handleInput); //detect user input
input.addEventListener("change",handleInput); //detect user input



