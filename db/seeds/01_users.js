var faker = require('faker');

function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

exports.seed = function(knex, Promise) {
  return knex('user_login').del()
    .then(function () {
      let name = faker.name.firstName();
      let lname = faker.name.lastName();
      let email = faker.internet.email();
      let query = "CALL CreateUser('" + name + "', '" + lname + "', 'm', NOW(), '" + makeid(28) + "', '" + email + "', '102030');";
      
      return knex.raw(query)
      .then(() => {
        email = faker.internet.email();
        lname = faker.name.lastName();
        name = faker.name.firstName();
        query = "CALL CreateUser('" + name + "', '" + lname + "', 'm', NOW(), '" + makeid(28) + "', '" + email + "', '102030');";
        return knex.raw(query)
      })
      .then(() => {
        email = faker.internet.email();
        lname = faker.name.lastName();
        name = faker.name.firstName();
        query = "CALL CreateUser('" + name + "', '" + lname + "', 'm', NOW(), '" + makeid(28) + "', '" + email + "', '102030');";
        return knex.raw(query)
      })
      .then(() => {
        email = faker.internet.email();
        lname = faker.name.lastName();
        name = faker.name.firstName();
        query = "CALL CreateUser('" + name + "', '" + lname + "', 'm', NOW(), '" + makeid(28) + "', '" + email + "', '102030');";
        return knex.raw(query)
      })
      .then(() => {
        email = faker.internet.email();
        lname = faker.name.lastName();
        name = faker.name.firstName();
        query = "CALL CreateUser('" + name + "', '" + lname + "', 'm', NOW(), '" + makeid(28) + "', '" + email + "', '102030');";
        return knex.raw(query)
      });
      
    });
};

