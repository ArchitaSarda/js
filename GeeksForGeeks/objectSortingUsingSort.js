//Sort array of objects by single key with date value 
// https://www.geeksforgeeks.org/sort-array-of-objects-by-single-key-with-date-value-in-javascript/
// https://www.geeksforgeeks.org/javascript-array-sort-method/



var arr = [2, 5, 8, 1, 4]
//ascending
console.log(arr.sort((a,b) => {
    // if(b < a) 
    //     return 1;
    // else if(b > a)
    //     return -1;
    // else 
    //     return 0
    
    return a-b
}));


//descending
console.log(arr.sort((a,b) => {
    // if(b > a) 
    //     return 1;
    // else if(b < a)
    //     return -1;
    // else 
    //     return 0
    
    return b-a
}));



const arr2 = [
    { name: 'Geeks', date: new Date('2022-03-15') },
    { name: 'Abc', date: new Date('2022-03-12') },
    { name: 'GFG', date: new Date('2022-03-20') },
    { name: 'G4G', date: new Date('2021-03-20') }
];


console.log(arr2.sort((a,b) => {
    return a.date - b.date
}));

console.log(arr2.sort((a,b) => {
    let {name: aName} = a;
    let {name: bName} = b;

    aName = aName.toUpperCase();
    bName = bName.toUpperCase();

    if(aName < bName)
        return -1;
    else if(aName > bName)
        return 1;
    else 
        return 0
}));

