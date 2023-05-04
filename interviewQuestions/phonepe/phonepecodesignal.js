// const p = new Promise((resolve) => {
//     console.log(1);
//     setTimeout(() => {
//         resolve();
//     })
// })

// Promise.resolve().then(() => console.log(2))
// setTimeout(() => console.log(3))
// p.then(() => console.log(4))
// setTimeout(() => console.log(5))


// s = "phonepe";
// s[6] = "a";
// s[7] = "y";
// s[1] = "A";
// console.log(s);


// function doS() {
//     return new Promise((resolve,reject) => {
//         reject();
//         resolve();
//     })
// }

// let promise = doS();

// promise.then(() => console.log("1"))
// .then(() => console.log("2"))
// .catch(() => console.log("e1"))
// .then(() => console.log("3"))
// .finally(() => console.log("f"))


// function add(a,b) {
//     return a+b
// }

// function sub(a,b) {
//     return a-b
// }

// function opF(operation, a,b) {
//     switch(operation) {
//         case "ADD":
//             return add;
//         case "SUB":
//             return sub;
//         default:
//             return null;
//     }
// }

// console.log(opF("ADD")(5,3), opF("SUB")(5,3));

// let person1 = {
//     name: "sunil",
//     add: {
//         l1: "data",
//         l2: "data2"
//     },
//     surname: "sar"
// }

// let person2 = {
//     ...person1
// }

// person1.name = "anil"
// person1.surname = "gup"
// person1.add.l1 = "bng"
// person1.add.l2 = "kar"
// person2.name = "archita"
// person2.add.l1 = "bnglore"
// console.log(person1);
// console.log(person2);

// function concat(a,b) {
//     if(!Number.isInteger(a)) {
//         throw "first"
//     }
//     if(!Number.isInteger(b)) {
//         throw "second"
//     }
//     if(a === 0) {
//         throw "third"
//     }
//     return a.toString() + b.toString();
// }

// let answer;

// try {
//     answer = concat('0',4)
// } catch (error) {
//     answer = error;
// } finally {
//     console.log(answer);
// }

// try {
//     console.log(concat(1,11));
// } catch (error) {
//     console.log(error);
// }

// phonepe question
//     <div class="red orange" id="green">
//         <div class="orange"></div>
//     </div>


// <style>
//         div.red.orange {
//             background: blue;
//             min-height: 400px;
//             min-width: 400px;
//             border: 1px solid black;
//             padding: 50px;
//         }
//         #green {
//             background: green;
//         }
//         div.red {
//             background: red;
//         }
//         .orange {
//             background: orange;
//             min-height: 200px;
//             min-width: 200px;
//             border: 1px solid black;
//         }
//     </style>
