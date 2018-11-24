let faker = require('faker');
module.exports = [
  {name: faker.name.firstName() + " " + faker.name.lastName(),   address: faker.address.streetAddress(),    lat: faker.address.latitude(), lon:faker.address.longitude()},
  {name: faker.name.firstName() + " " + faker.name.lastName(),   address: faker.address.streetAddress(),    lat: faker.address.latitude(), lon:faker.address.longitude()},
  {name: faker.name.firstName() + " " + faker.name.lastName(),   address: faker.address.streetAddress(),    lat: faker.address.latitude(), lon:faker.address.longitude()},
  {name: faker.name.firstName() + " " + faker.name.lastName(),   address: faker.address.streetAddress(),    lat: faker.address.latitude(), lon:faker.address.longitude()},
  {name: faker.name.firstName() + " " + faker.name.lastName(),   address: faker.address.streetAddress(),    lat: faker.address.latitude(), lon:faker.address.longitude()}
];