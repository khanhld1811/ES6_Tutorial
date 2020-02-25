// Destructuring object
let infomation = { firstName: 'Khanh', lastName: 'Duy', age: "20", male: "true"};

let { firstName, lastName, ...attribute } = infomation;
console.log(`${firstName} ${lastName}`);
console.log(attribute);