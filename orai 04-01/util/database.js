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
    await dbRun("DROP TABLE IF EXISTS wizards")
    await dbRun("CREATE TABLE If NOT EXISTS wizards(id INTEGER PRIMARY KEY AUTOINCREMENT, name STRING, magicWand STRING, house STRING);")

    const wizards = [
        {name: "Béla", magicWand : "makaróni", house : "kertes"},
        {name: "Géza", magicWand : "hurkapálca", house : "panel"},
        {name: "István", magicWand : "pendrive", house : "társas"}
    ]

    for(const wizard of wizards)
    {
       await dbRun("INSERT INTO wizards (name, magicWand, house) VALUES (?, ?, ?);", [wizard.name, wizard.magicWand, wizard.house ])
    }
}