import { sql } from "drizzle-orm"
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const items = sqliteTable('items', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	date: text('date').default(sql`CURRENT_DATE`),
	desc: text('desc').notNull(),
	img: text('img').notNull(), // base64 encoded
	claimed: integer('claimed', { mode: "boolean" }).notNull(),
});

export const claims = sqliteTable('claims', {
	id: text('id').primaryKey().$defaultFn(() => crypto.randomUUID()),
	item: text('item').notNull(), // id of item
	name: text('name').notNull(), // in case of stalking
	tel: integer('tel'),
	email: text('email'),
	status: integer('status').notNull(),
});