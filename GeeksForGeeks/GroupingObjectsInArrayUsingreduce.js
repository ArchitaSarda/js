//How to group objects in an array based on a common property into an array of arrays
//https://www.geeksforgeeks.org/how-to-group-objects-in-an-array-based-on-a-common-property-into-an-array-of-arrays-in-javascript/
let fruits = [
    {
        fruit_name: "Apple",
        fruit_color: "Red",
    },
    {
        fruit_name: "Pomegranate",
        fruit_color: "Red",
    },
    {
        fruit_name: "Grapes",
        fruit_color: "Green",
    },
    {
        fruit_name: "Kiwi",
        fruit_color: "Green",
    },
     {
        fruit_name: "Orange",
        fruit_color: "Orange",
    },
];


const output = [
    [
        { fruit_name: 'Apple', fruit_color: 'Red' },
        { fruit_name: 'Pomegranate', fruit_color: 'Red' }
    ],
    [
        { fruit_name: 'Grapes', fruit_color: 'Green' },
        { fruit_name: 'Kiwi', fruit_color: 'Green' }
    ],
    [
        { fruit_name: 'Orange', fruit_color: 'Orange' }
    ]
]


const fn = (acc,curr) => {
    if(!acc[curr.fruit_color])
        acc[curr.fruit_color] = [];
    
    acc[curr.fruit_color].push(curr) 
    return acc;
}


console.log(fruits.reduce(fn,{}));
console.log(Object.values(fruits.reduce(fn,[])));
