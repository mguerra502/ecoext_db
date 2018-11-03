exports.up = function (knex, Promise) {
	return knex.schema.alterTable('account_purses', function (table) {
		table.primary(['account_id', 'purse_id']);

		table.foreign('account_id').references('account_id').inTable('account');
		table.foreign('purse_id').references('purse_id').inTable('purse');
	})
};

exports.down = function (knex, Promise) {
	return knex.schema.alterTable('account_purses', function (table) {
		table.dropForeign('account_id')
		table.dropForeign('purse_id')
	});
};