import Database from 'better-sqlite3'

const db = new Database("./database/database.sqlite")

db.prepare("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title STRING, author STRING)").run()

export const getBooks = ()=> db.prepare("SELECT * FROM books").all()
export const getBook = (id)=> db.prepare("SELECT * FROM books WHERE id = ? VALUES (?)").get(id)
export const saveBook = (title, author)=> db.prepare("INSERT INTO books (title, author) VALUES (?,?)").run(title, author)
export const deleteBook = (id)=> db.prepare("DELETE FROM books WHERE id = ?, (?)").run(id)

const books = [
    {title: "valami1", author :"valaki1"},
    {title: "valami2", author :"valaki2"},
    {title: "valami3", author :"valaki3"},
    {title: "valami4", author :"valaki4"},
]

/*for(var book of books)
{
    saveBook(book.title, book.author)
}*/