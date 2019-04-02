const faker = require('faker');
const tableName = "keys";
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(tableName).del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert([
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:22229})
        },
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:2222})
        },
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:2222})
        },
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:2222})
        },
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:2222})
        },
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:2222})
        },
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:2222})
        },
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:2222})
        },
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:2222})
        },
        {
          "id": faker.random.alphaNumeric(128),
          "key_aes": faker.random.alphaNumeric(64),
          // "key_aes": faker.random.hexaDecimal(64),
          "key_iv": faker.random.alphaNumeric(32),
          // "key_iv": faker.random.hexaDecimal(32),
          "ipv4": faker.random.alphaNumeric(15),
          "port": faker.random.number({min:1025, max:2222})
        }
      ]);
    });
};
