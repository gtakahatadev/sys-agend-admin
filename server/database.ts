import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";

mkdirSync("data", { recursive: true });

const db = new Database("data/usuarios.db");

db.pragma("foreign_keys = ON");

db.exec(`CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha_hash TEXT NOT NULL
)`);

export default db;
