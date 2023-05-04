const input = document.querySelector("input");
console.log(input.value);
console.log(input.getAttribute('value'));

input.value = "hi"
console.log(input.value);
console.log(input.getAttribute('value'));

//attribute - defined at html markup
//property -defined at DOM