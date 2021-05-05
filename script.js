const input = document.querySelector(".input-field");
const result = document.querySelector(".suggestion");

input.addEventListener("keyup",handleInput);
input.addEventListener("change",handleInput);

function handleInput(){
    const toCompare= this.value;
    result.innerHTML= `<ul class="suggestion">
    <li class="suggestion-item"></li>
</ul>`
}