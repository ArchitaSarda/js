const person = {
    name: "Archita",
    phone: {
        home: 1234567890,
        personal: 234567890,
        office: {
            number: 4567890,
            extension: 123,
        },
    },
    address: {
        temporary: {
            city: "Bangalore",
            state: "Karnataka",
            pincode: 560008,
            line1: {
                house_no: 2345,
                apartment: "Derive"
            },
        },
        permanent: {
            city: "Indore",
            state: "MP",
            pincode: 452001,
            line1: {
                house_no: 304,
                apartment: "IBD",
                other_info: {
                    landmark: "post office"
                }
            },
        }
    }
}


const flattenObj = (obj,key) => {
    const output = {};
    const flatten = (val,key) => {
        if(typeof val === 'object') {
            Object.keys(val).forEach(o => {
                flatten(val[o],`${key}_${o}`);
            })
        } else {
            output[key] = val;
        }
        
    }
    flatten(obj,key);
    return output;
}

console.log(flattenObj(person, "person"));


console.log(Object.getPrototypeOf(person));


//unflatten an object

// const input = {
//   'firstName': 'Hello',
//   'lastName': 'World',
//   'car.name': 'Duster',
//   'car.price': 9.9,
//   'car.mileage': 16.42,
//   'car.seat.0.seater': 5,
//   'car.seat.1.seatLength': 4360
// }

// const unFlattenObj = data => {
//     const result = {};
//     for (let i in data) {
//       let keys = i.split(".");
//       keys.reduce((acc, value, index) => {
//         return (
//           acc[value] ||
//           (acc[value] = isNaN(Number(keys[index + 1]))
//             ? keys.length - 1 === index
//               ? data[i]
//               : {}
//             : [])
//         );
//       }, result);
//     }
//     return result;
// }

// console.log(unFlattenObj(input));

// const output = {
//     "firstName": "Hello",
//     "lastName": "World",
//     "car": {
//         "name": "Duster",
//         "price": 9.9,
//         "mileage": 16.42,
//         "seat": [
//             {"seater": 5},
//             {"seatLength": 4360},
//         ]
//     }
// }

// const flattenObj = input => {
//     const result = {};
//     const flatten = (value,parent) => {

//         for(const property in value) {
//             const newKey = parent ? `${parent}.${property}` : `${property}`;
//             if(typeof value[property] === 'object') {
//                 flatten(value[property], newKey)
//             } else {
//                 result[newKey] = value[property];
//             }
//         }
//     }
//     flatten(input)
//     return result;
// }

// console.log(flattenObj(output));









