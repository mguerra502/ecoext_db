
exports.up = function(knex, Promise) {
    return knex.schema.alterTable('establishment_phone_numbers', function (table) {
        table.unique("phone_number_id");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('establishment_phone_numbers', function (table) {
      table.dropUnique(["phone_number_id"]);
  })
};
