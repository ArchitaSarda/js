const arr = [1,2,3,4,5,6];

const sum = (acc, val) => acc + val;
const mul = (acc, val) => acc * val;
const max = (acc, val) => acc > val ? acc : val;
const min = (acc, val) => acc < val ? acc : val;

console.log(arr.reduce(sum,0));
console.log(arr.reduce(mul,1));
console.log(arr.reduce(max,0));
console.log(arr.reduce(min));


const users = [
    {name:'a1',age: 34,surname: 's1'},
    {name:'a2',age: 20,surname: 's2'},
    {name:'a3',age: 34,surname: 's3'},
    {name:'a4',age: 87,surname: 's4'},
    {name:'a5',age: 12,surname: 's5'},
]

const maxAge = (acc,val) => {
    const {age: accAge} = acc;
    const {age: valAge} = val;
    return accAge > valAge ? acc : val;
}

const ageDistribution = (acc,val) => {
    const {age} = val;
    if(age) {
        acc[age] = acc[age] ? acc[age]+1 : 1;
    }
    return acc;
}

console.log(users.reduce(maxAge,0));
console.log(users.reduce(ageDistribution,{}));

const namesOfAgeLessThan30 = (acc,val) => {
    const {age, name} = val;
    if(age < 30)
        acc.push(name);
    return acc;
}

console.log(users.filter(user => user.age > 30).map(user => user.name));
console.log(users.reduce(namesOfAgeLessThan30,[]));


//pollyfill
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let output = initialValue;
  if(!Array.isArray(this) || this.length === 0) {
    return output;
  }
    for(let i=0;i<this.length;i++) {
        output=callbackFn(output,this[i],i,this)
    }
    return output;
};