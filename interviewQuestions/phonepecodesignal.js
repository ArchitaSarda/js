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
// }

// let person2 = {
//     ...person1
// }

// person1.name = "anil"
// person1.add.l1 = "bng"
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

function monthMappper(){
   return {
      1: 'jan',
      2: 'feb',
      3: 'mar',
     4: 'apr',
      5: 'may',
      6: 'jun',
     7: 'jul',
     8: 'aug',
    9: 'sep',
    10: 'oct',
    11: 'nov',
    12: 'dec'
   }
} 

function transactionAggregator(transactions, year) {
  // Initialize an empty object to store the aggregated expenses
  const aggregatedExpenses = {};
  // Get the month mapper object
  const monthMapper = monthMappper();
  
  // Iterate through each transaction object
  transactions.forEach(transaction => {
    // Parse the year, month and day from the transaction date
    const [month, day, transactionYear] = transaction.date.split('-');
    // If the transaction year matches the given year parameter
    if (transactionYear == year) {
      // If the month doesn't exist in the aggregated expenses object, initialize it with empty object
      if (!aggregatedExpenses[month]) {
        aggregatedExpenses[month] = {};
      }
      // If the category doesn't exist in the aggregated expenses object for the given month, initialize it with 0
      if (!aggregatedExpenses[month][transaction.type]) {
        aggregatedExpenses[month][transaction.type] = 0;
      }
      // Add the transaction amount to the category for the given month
      aggregatedExpenses[month][transaction.type] += transaction.amount;
      // If the total expenditure doesn't exist in the aggregated expenses object for the given month, initialize it with 0
      if (!aggregatedExpenses[month]['total']) {
        aggregatedExpenses[month]['total'] = 0;
      }
      // Add the transaction amount to the total expenditure for the given month
      aggregatedExpenses[month]['total'] += transaction.amount;
    }
  });
  
  // Iterate through each month in the aggregated expenses object
  for (const month in aggregatedExpenses) {
    // Map the month number to month string using the month mapper object
    const monthString = monthMapper[Number(month)];
    // Rename the month property in the aggregated expenses object
    aggregatedExpenses[monthString] = aggregatedExpenses[month];
    delete aggregatedExpenses[month];
  }
  
  return aggregatedExpenses;
}

const transactions = [
 {
  type: 'grocery',
  amount: 600,
  date: '05-21-2021'
 },
 {
  type: 'bill',
  amount: 500,
  date: '04-21-2021'
 },
 {
  type: 'medical',
  amount: 400,
  date: '05-21-2021'
 },
 {
  type: 'grocery',
  amount: 300,
  date: '04-21-2021'
 },
 {
  type: 'food',
  amount: 200,
  date: '04-21-2021'
 },
 {
  type: 'food',
  amount: 100,
  date: '04-21-2021'
 }
];

const year = 2021;

console.log(transactionAggregator(transactions, year));


console.log(transactionAggregator([
 {
  type: 'grocery',
  amount: 100,
  date: '05-21-2020'
 },
 {
  type: 'bill',
  amount: 500,
  date: '04-21-2021'
 },
 {
  type: 'medical',
  amount: 400,
  date: '05-21-2020'
 },
 {
  type: 'grocery',
  amount: 300,
  date: '04-21-2021'
 }
], 2020));
