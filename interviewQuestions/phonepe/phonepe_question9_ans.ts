question 9 - answer

const monthMapper = require('./monthMapper');

function transactionAggregator(transactions, year) {
    const expenses = {};
    transactions.forEach(transaction => {
        
        const [month,day,tYear] = transaction.date.split('-');
        
        if(tYear == year) {
           
            if(!expenses[month]) {
                expenses[month] = {};
            }
            
            if(!expenses[month][transaction.type]) {
                expenses[month][transaction.type] = 0;
            }
            
            expenses[month][transaction.type] += transaction.amount;
          
            if(!expenses[month]['total']) {
                expenses[month]['total'] = 0;
            }
            
            expenses[month]['total'] += transaction.amount;
        }
    })
    
    const monthMap = monthMapper();
    
    for(const month in expenses) {
        
        const monthString = monthMap[Number(month)]
        expenses[monthString] = expenses[month];
        delete expenses[month];
    }
    console.log(expenses);
    return expenses;
}

module.exports = transactionAggregator;


function monthMapper() {
    return {
        1: 'jan',
        //and so on
    
    }
}