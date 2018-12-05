exports.up = function (knex, Promise) {
	return knex.schema.alterTable('account_purses', function (table) {
		table.foreign('account_id').references('account_id').inTable('account').onDelete("CASCADE").onUpdate("CASCADE");
		table.foreign('purse_id').references('purse_id').inTable('purse').onDelete("CASCADE").onUpdate("CASCADE");
	})
	.then(() => {
		return knex.schema.alterTable('account_notifications', function (table) {
			table.primary(['account_id', 'notification_id']);
			table.foreign('account_id').references('account_id').inTable('account').onDelete("CASCADE").onUpdate("CASCADE");
			table.foreign('notification_id').references('notification_id').inTable('notification').onDelete("CASCADE").onUpdate("CASCADE");
		})
	})
	.then(() => {
		return knex.schema.alterTable('account_transactions', function (table) {
			table.primary(['account_id', 'transaction_id']);
			table.foreign('account_id').references('account_id').inTable('account').onDelete("CASCADE").onUpdate("CASCADE");
			table.foreign('transaction_id').references('transaction_id').inTable('transaction').onDelete("CASCADE").onUpdate("CASCADE");
		})
	})
	.then(() => {
		return knex.schema.alterTable('establishment_transactions', function (table) {
			table.primary(['establishment_id', 'transaction_id']);
			table.foreign('establishment_id').references('establishment_id').inTable('establishment').onDelete("CASCADE").onUpdate("CASCADE");
			table.foreign('transaction_id').references('transaction_id').inTable('transaction').onDelete("CASCADE").onUpdate("CASCADE");
		})
	})
	.then(() => {
		return knex.schema.alterTable('establishment_login', function (table) {
			table.foreign('establishment_id').references('establishment_id').inTable('establishment').onDelete("CASCADE").onUpdate("CASCADE");
		})
	})
	.then(() => {
		return knex.schema.alterTable('establishment_phonenumber', function (table) {
			table.primary(['establishment_id', 'phonenumber_id']);
			table.foreign('establishment_id').references('establishment_id').inTable('establishment').onDelete("CASCADE").onUpdate("CASCADE");
			table.foreign('phonenumber_id').references('phonenumber_id').inTable('phonenumber').onDelete("CASCADE").onUpdate("CASCADE");
		})
	})
	.then(() => {
		return knex.schema.alterTable('transaction_notifications', function (table) {
			table.primary(['transaction_id', 'notification_id']);
			table.foreign('transaction_id').references('transaction_id').inTable('transaction').onDelete("CASCADE").onUpdate("CASCADE");
			table.foreign('notification_id').references('notification_id').inTable('notification').onDelete("CASCADE").onUpdate("CASCADE");
		})
	})
	.then(() => {
		return knex.schema.alterTable('purse_transactions', function (table) {
			table.primary(['purse_id', 'transaction_id']);
			table.foreign('purse_id').references('purse_id').inTable('purse').onDelete("CASCADE").onUpdate("CASCADE");
			table.foreign('transaction_id').references('transaction_id').inTable('transaction').onDelete("CASCADE").onUpdate("CASCADE");
		})
	})
	.then(() => {
		return knex.schema.alterTable('transaction_items', function (table) {
			// table.primary('transaction_id');
			table.foreign('transaction_id').references('transaction_id').inTable('transaction').onDelete("CASCADE").onUpdate("CASCADE");
		})
	})
	.then(() => {
		return knex.schema.alterTable('transaction_payment', function (table) {
			table.primary('transaction_id');
			table.foreign('transaction_id').references('transaction_id').inTable('transaction').onDelete("CASCADE").onUpdate("CASCADE");
		})
	})
	.then(() => {
		return knex.schema.alterTable('user_login', function (table) {
			table.primary('account_id');
			table.foreign('account_id').references('account_id').inTable('account').onDelete("CASCADE").onUpdate("CASCADE");
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
		return knex.schema.table('account_notifications', function (table) {
			return table.dropForeign('account_id')
		})
	})
	.then(() => {
		return knex.schema.table('account_notifications', function (table) {
			return table.dropForeign('notification_id')
		})
	})
	.then(() => {
		return knex.schema.table('account_transactions', function (table) {
			return table.dropForeign('account_id')
		})
	})
	.then(() => {
		return knex.schema.table('account_transactions', function (table) {
			return table.dropForeign('transaction_id')
		})
	})
	.then(() => {
		return knex.schema.table('establishment_transactions', function (table) {
			return table.dropForeign('establishment_id')
		})
	})
	.then(() => {
		return knex.schema.alterTable('establishment_login', function (table) {
			table.dropForeign('establishment_id');
		})
	})
	.then(() => {
		return knex.schema.table('establishment_transactions', function (table) {
			return table.dropForeign('transaction_id')
		})
	})
	.then(() => {
		return knex.schema.table('establishment_phonenumber', function (table) {
			return table.dropForeign('establishment_id')
		})
	})
	.then(() => {
		return knex.schema.table('transaction_notifications', function (table) {
			return table.dropForeign('notification_id')
		})
	})
	.then(() => {
		return knex.schema.table('transaction_notifications', function (table) {
			return table.dropForeign('transaction_id')
		})
	})
	.then(() => {
		return knex.schema.table('purse_transactions', function (table) {
			return table.dropForeign('purse_id')
		})
	})
	.then(() => {
		return knex.schema.table('purse_transactions', function (table) {
			return table.dropForeign('transaction_id')
		})
	})
	.then(() => {
		return knex.schema.table('transaction_items', function (table) {
			return table.dropForeign('transaction_id')
		})
	})
	.then(() => {
		return knex.schema.table('transaction_payment', function (table) {
			return table.dropForeign('transaction_id')
		})
	})
	.then(() => {
		return knex.schema.table('user_login', function (table) {
			return table.dropForeign('account_id')
		})
	})
};