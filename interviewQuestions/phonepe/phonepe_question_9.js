// function monthMappper(){
//    return {
//       1: 'jan',
//       2: 'feb',
//       3: 'mar',
//      4: 'apr',
//       5: 'may',
//       6: 'jun',
//      7: 'jul',
//      8: 'aug',
//     9: 'sep',
//     10: 'oct',
//     11: 'nov',
//     12: 'dec'
//    }
// } 

// function transactionAggregator(transactions, year) {
//   // Initialize an empty object to store the aggregated expenses
//   const aggregatedExpenses = {};
//   // Get the month mapper object
//   const monthMapper = monthMappper();
  
//   // Iterate through each transaction object
//   transactions.forEach(transaction => {
//     // Parse the year, month and day from the transaction date
//     const [month, day, transactionYear] = transaction.date.split('-');
//     // If the transaction year matches the given year parameter
//     if (transactionYear == year) {
//       // If the month doesn't exist in the aggregated expenses object, initialize it with empty object
//       if (!aggregatedExpenses[month]) {
//         aggregatedExpenses[month] = {};
//       }
//       // If the category doesn't exist in the aggregated expenses object for the given month, initialize it with 0
//       if (!aggregatedExpenses[month][transaction.type]) {
//         aggregatedExpenses[month][transaction.type] = 0;
//       }
//       // Add the transaction amount to the category for the given month
//       aggregatedExpenses[month][transaction.type] += transaction.amount;
//       // If the total expenditure doesn't exist in the aggregated expenses object for the given month, initialize it with 0
//       if (!aggregatedExpenses[month]['total']) {
//         aggregatedExpenses[month]['total'] = 0;
//       }
//       // Add the transaction amount to the total expenditure for the given month
//       aggregatedExpenses[month]['total'] += transaction.amount;
//     }
//   });
  
//   // Iterate through each month in the aggregated expenses object
//   for (const month in aggregatedExpenses) {
//     // Map the month number to month string using the month mapper object
//     const monthString = monthMapper[Number(month)];
//     // Rename the month property in the aggregated expenses object
//     aggregatedExpenses[monthString] = aggregatedExpenses[month];
//     delete aggregatedExpenses[month];
//   }
  
//   return aggregatedExpenses;
// }

// const transactions = [
//  {
//   type: 'grocery',
//   amount: 600,
//   date: '05-21-2021'
//  },
//  {
//   type: 'bill',
//   amount: 500,
//   date: '04-21-2021'
//  },
//  {
//   type: 'medical',
//   amount: 400,
//   date: '05-21-2021'
//  },
//  {
//   type: 'grocery',
//   amount: 300,
//   date: '04-21-2021'
//  },
//  {
//   type: 'food',
//   amount: 200,
//   date: '04-21-2021'
//  },
//  {
//   type: 'food',
//   amount: 100,
//   date: '04-21-2021'
//  }
// ];

// const year = 2021;

// console.log(transactionAggregator(transactions, year));


// console.log(transactionAggregator([
//  {
//   type: 'grocery',
//   amount: 100,
//   date: '05-21-2020'
//  },
//  {
//   type: 'bill',
//   amount: 500,
//   date: '04-21-2021'
//  },
//  {
//   type: 'medical',
//   amount: 400,
//   date: '05-21-2020'
//  },
//  {
//   type: 'grocery',
//   amount: 300,
//   date: '04-21-2021'
//  }
// ], 2020));