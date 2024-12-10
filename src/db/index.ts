import { openDB } from 'idb';
import type { Game } from '../types/game';

const dbName = 'christmas_game_db';
const storeName = 'games';

export const db = await openDB(dbName, 1, {
  upgrade(db) {
    db.createObjectStore(storeName, { keyPath: 'id' });
  },
});

export async function saveGame(game: Game) {
  return db.put(storeName, game);
}

export async function getGame(id: string) {
  return db.get(storeName, id);
}