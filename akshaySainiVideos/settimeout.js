// function x() {
//     for(var i=1; i<=5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000);
//     }
    
// }
// x();

// function y() {
//     for(let i=1; i<=5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i*1000);
//     }
    
// }
// y();


function z() {
    for(var i=1; i<=5; i++) {
        function a(i) {
            setTimeout(function() {
                console.log(i);
            }, i*1000);
        };
        a(i);
    }
}

z();
