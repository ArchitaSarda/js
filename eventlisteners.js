
// document.getElementById("clickme").addEventListener("click", () => {
//     console.log("button clicked");
// })


function attachEvent() {
    let count = 0;
    document.getElementById("clickme").addEventListener("click", () => {
        console.log("button clicked", ++count);
    })
}

attachEvent();
