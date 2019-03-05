
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('transaction_items', function (table) {
            table.bigIncrements('transaction_items_id').primary();
			// table.primary(['tran', 'notification_id']);
			// table.foreign('account_id').references('account_id').inTable('account').onDelete("CASCADE").onUpdate("CASCADE");
			// table.foreign('notification_id').references('notification_id').inTable('notification').onDelete("CASCADE").onUpdate("CASCADE");
		})
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('transaction_items', function (table) {
      table.dropColumn("transaction_items_id");
  })
};
