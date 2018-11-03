exports.up = function (knex, Promise) {
	return knex.schema.alterTable('account_purses', function (table) {
		table.primary(['account_id', 'purse_id']);

		table.foreign('account_id').references('account_id').inTable('account');
		table.foreign('purse_id').references('purse_id').inTable('purse');
	})
	.then(() => {
		return knex.schema.alterTable('account_notification', function (table) {
			table.primary(['account_id', 'notification_id']);

			table.foreign('account_id').references('account_id').inTable('account');
			table.foreign('notification_id').references('notification_id').inTable('notification');
		})
	})
};

exports.down = function (knex, Promise) {
	// return knex.schema.table('account_purses', function (table) {})

	return knex.schema.table('account_purses', function (table) {
		return table.dropForeign('account_id')
	})
	.then(() => {
		return knex.schema.table('account_purses', function (table) {
			return table.dropForeign('purse_id')
		})
	})
	.then(() => {
		return knex.schema.table('account_notification', function (table) {
			return table.dropForeign('account_id')
		})
	})
	.then(() => {
		return knex.schema.table('account_notification', function (table) {
			return table.dropForeign('notification_id')
		})
	})
};