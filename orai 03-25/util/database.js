import sqlite from "sqlite3"

const db = new sqlite.Database("./data/database.sqlite");

export function dbAll(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

export function dbGet(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

export function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function (err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

export async function initializeDatabse() {
    await dbRun("DROP TABLE IF EXISTS users")
    await dbRun("CREATE TABLE If NOT EXISTS users(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING, age INTEGER);")

    const users = [
        {name: "Béla", age : 19},
        {name: "Géza", age : 20},
        {name: "István", age : 5}
    ]

    for(const user of users)
    {
       await dbRun("INSERT INTO users (name, age) VALUES (?, ?);", [user.name, user.age])
    }
}