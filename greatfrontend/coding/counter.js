// function increaseCounter () {
//   let count = 0;
//   document.getElementById("clickme").addEventListener("click", (e) => {
//     count += 1;
//     console.log(count);
//     e.target.innerHTML = `Click me: ${count}`
//   })
// }

// increaseCounter()

let add = document.querySelector("#add");
let subract = document.querySelector("#subtract");

add.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) + 1;

  if (result > 10) {
    result = 10;
  }

  output.innerText = result;
});

subract.addEventListener("click", function () {
  let output = document.querySelector("#output");
  let result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result;
});
