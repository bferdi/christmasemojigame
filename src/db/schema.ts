import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const games = sqliteTable('games', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  emojis: text('emojis').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull()
});