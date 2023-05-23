Question 9

Codewriting

In the PhonePe application, we need to create one page where we can show the users the money spent by them in various categories during that particular year. For the same, you are provided an array of objects containing details of transaction. Each object will have category, amount and date of transaction.

    {
        type: 'grocery',
        amount: 600,
        date: '05-21-2021'
    }
For simplicity, you can assume following

The type will be string
The date will be in format MM-DD-YYYY
The amount is in rupees of type number
Complete a function transactionAggregator which will take 2 input params

transactions (array of objects)
year (Year can be provided as string or number type. You need to handle both)
and return the output (aggregated all the expenses in object by month for that particular year)

the output is an object where key is the month in 3 char format (e.g. if date = '04-04-2021', month = apr) and value is an object containing aggregated expenses for each category. Each object should also contain total expenditure for that month with key as total. You can use the monthMapper function to get mapping of month number to month string.
the amount should be in number format
Sample 1:

Input Transaction Array

[
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
Input Year = 2021

Output

{
    apr: {
        food: 300, // total expense of food in april is 200 + 100
        grocery: 300,
        bill: 500,
        total: 1100, // total expense for that month
    },
    may: {
        medical: 400,
        grocery: 600,
        total: 1000,
    }
}
Sample 2:

Input Transaction Array

[
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
Input Year = "2020"

Output

{
    may: {
        grocery: 100,
        medical: 400,
        total: 100,
    }
}
On the left hand side in the screen, you can access various files containing functions. In the file main.js, you have to complete the function transactionAggregator. You can also see visible.spec.js to get hint of our evaluation criteria

[execution time limit] 30 seconds

[memory limit] 1 GB