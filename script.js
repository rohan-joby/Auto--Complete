let cities = []; //to store city details
const url = "cities.json"; //url of json containing data

fetch(url)
  .then((data) => data.json())
  .then((value) => (cities = [...value])); //to store city details from json in "cities" array

const input = document.querySelector(".input-field"); //to access user input
const result = document.querySelector(".suggestion"); //to access suggestions dropdown

input.addEventListener("keyup", showResults); //detect user input
input.addEventListener("change", showResults); //detect user input

function findResults(stringToCheck, cities) {
  //to find name sof matching places
  return cities.filter((place) => {
    const regex1 = new RegExp(stringToCheck, "gi");
    return place.name.match(regex1) || place.state.match(regex1);
  });
}

function showResults() {
  //to display result of search
  const placesFound = findResults(this.value, cities);
  const html = placesFound.map((place) => {
    const regex = new RegExp(this.value, "gi");
    const city = place.name.replace(regex,`<span class="highlight">${this.value}</span>`
    );
    const state = place.state.replace(regex,`<span class="highlight">${this.value}</span>`
    );
    return `<ul class="suggestion"><li class="suggestion-item">${city}, ${state}</li></ul>`;
  });
  const stringText = html.join(" ");

  if(input.value != input.defaultValue){
    result.innerHTML = stringText;
  }
  else{
    result.innerHTML = "";
  }
}
