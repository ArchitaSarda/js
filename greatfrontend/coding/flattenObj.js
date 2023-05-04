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

