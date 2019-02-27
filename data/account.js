var faker = require('faker');

module.exports = [
  {firstName: faker.name.firstName(), lastName: faker.name.lastName(), gender: "Female", dob: faker.date.between("1940", "2000")},
  {firstName: faker.name.firstName(), lastName: faker.name.lastName(), gender: "Female", dob: faker.date.between("1940", "2000")},
  {firstName: faker.name.firstName(), lastName: faker.name.lastName(), gender: "Female", dob: faker.date.between("1940", "2000")},
  {firstName: faker.name.firstName(), lastName: faker.name.lastName(), gender: "Female", dob: faker.date.between("1940", "2000")},
  {firstName: faker.name.firstName(), lastName: faker.name.lastName(), gender: "Female", dob: faker.date.between("1940", "2000")}
];