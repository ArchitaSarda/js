// document.getElementById("clickme").addEventListener("click", function xyz() {
//     console.log("button click event");
// });


function attachEvent() {
    let counter=0;
    document.getElementById("clickme").addEventListener("click", function xyz() {
        counter++;
        console.log("button clicked: ", counter);
    });
}

attachEvent();
