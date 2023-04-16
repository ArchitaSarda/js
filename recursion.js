let user = {
    name: "Archita",
    phone: 9876543210,
    address: {
        personal: {
            city: "Indore",
            state: "MP"
        },
        office: {
            city: "Bangalore",
            area: {
                landmark: "100 ft road",
                locality: "Indiranagar"
            }
        }
    },
    education: {
        10: "9.6CGPA",
        12: "85%",
        UG: "7.5CGPA" 
    }
}

let finalObj = {};

const flattenObj = (obj,parent) => {
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            flattenObj(obj[key],`${parent}_${key}`)
        } else {
            finalObj[`${parent}_${key}`] = obj[key];
            // finalObj[parent+"_"+key] = obj[key]
        }
    }
}

flattenObj(user, "user");
console.log(finalObj);