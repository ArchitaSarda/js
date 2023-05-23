import monthMapper from './monthMapper.js'
const monthMap = monthMapper();

const transactionAggregator = (input, year) => {
    const output = {};

    input.forEach(data => {
        const {date, type, amount} = data;
        const [month, day, yr] = date.split('-');
        if(yr == year) {
            const monthVal = monthMap[Number(month)];
            if(!output[monthVal]) {
                output[monthVal] = {
                    total: 0
                }
            }
            if(!output[monthVal][type]) {
                output[monthVal][type] = amount;
            } else {
                output[monthVal][type] += amount;
            }

            output[monthVal]['total'] += amount;

        }
    })

    return output;
}

const input1 = [
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
    },
]

console.log(transactionAggregator(input1, '2021'));


const input2 = [
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
]

console.log(transactionAggregator(input2, '2020'));