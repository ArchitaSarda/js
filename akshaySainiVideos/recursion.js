const user = {
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
    },
    emergencyContact: [
      {
        name: "Giriraj",
        relationship: "Father",
        phone: 987613240
      },
      {
        name: "Purnima",
        relationship: "Mother",
        phone: 889613240
      }
    ]
}

const output = {
    "user_name": "Archita",
    "user_phone": 9876543210,
    "user_address_personal_city": "Indore",
    "user_address_personal_state": "MP",
    "user_address_office_city": "Bangalore",
    "user_address_office_area_landmark": "100 ft road",
    "user_address_office_area_locality": "Indiranagar",
    "user_education_10": "9.6CGPA",
    "user_education_12": "85%",
    "user_education_UG": "7.5CGPA",
    "user_emergencyContact_0_name": "Giriraj",
    "user_emergencyContact_0_relationship": "Father",
    "user_emergencyContact_0_phone": 987613240,
    "user_emergencyContact_1_name": "Purnima",
    "user_emergencyContact_1_relationship": "Mother",
    "user_emergencyContact_1_phone": 889613240
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