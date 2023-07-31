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

const flattenObj = (obj) => {
  const finalObj = {};
  const flatten = (data,parent) => {
    Object.keys(data).forEach(val => {
      if(data[val] && typeof data[val] === 'object') {
        flatten(data[val], `${parent}_${val}`)
      } else {
        finalObj[`${parent}_${val}`] = data[val]
      }
    })
  }
  flatten(obj,"user")
  return finalObj;
}

console.log(flattenObj(user));