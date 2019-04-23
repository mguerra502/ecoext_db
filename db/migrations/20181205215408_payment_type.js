
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable('payment_type', function (table) {
      table.engine("InnoDB")
      table.bigIncrements('payment_type_id').unsigned().notNullable();
      table.text('type');
      table.timestamps(false, true);
  })
  .then(() => {
      return knex.schema.alterTable('transaction_payment', function (table) {
          table.dropColumn("type")
          table.bigInteger('payment_type_id').unsigned().notNullable();
      })
  })
  .then(() => {
      return knex.schema.alterTable('transaction_payment', function (table) {
          table.foreign('payment_type_id').references('payment_type_id').inTable('payment_type').onDelete("CASCADE").onUpdate("CASCADE");
      })
  })
  .then(function(rows) {
        return knex('payment_type').insert([
            {type: "Money"},
            {type: "Credit Card"},
            {type: "Debit Card"},
            {type: "Cheque"},
            {type: "Money Transfer"},
            {type: "Contactless Card"},
            {type: "Contactless Smart Device"},
            {type: "Mobile Payments"},
        ])
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('transaction_payment', function (table) {
        return table.dropForeign('payment_type_id')
    })
     .then(() => {
        return knex.schema.dropTable('payment_type');
  })  
};
