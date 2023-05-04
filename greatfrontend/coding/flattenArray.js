const arr = [1, [4], [2,4,5, [3,2, [4, [5,6,7], [3]]]]];

const flatten = (arr) => {
    const output = [];
    const flattenArray = (val) => {
        if(Array.isArray(val)) {
            for(let i=0;i<val.length;i++) {
                flattenArray(val[i]);
            }
        } else {
            output.push(val);
        }
    }
    flattenArray(arr);
    return output;

}
console.log(flatten(arr));