import express from 'express'
import * as db from './util/database.js'

const port = 8080
const app = express()

app.use(express.json())

app.get("/books", (req, res) => {
    res.status(200).json(db.getBooks())
})

app.get("/books/:id", (req, res) => {
    try{
        const id = req.params.id
        if(!id)
        {
          return res.status(404).json({message: "nem található ilyen id"})
        }
        const book = db.getBook(id)
        res.status(200).json(book)
    }
    catch(err)
    {
        res.status(500).json({message : `${err}`})
    }
})

app.post("/books", (req, res) => {
    try{
        const {title, author} = req.body
        if(!title ||!author)
        {
          return res.status(401).json({message: "hibás body"})
        }
        const newBook = db.saveBook(title, author)
        if(newBook.changes != 1)
        {
            return res.status(501).json({message: "nem lehetett menteni"})
        }

        res.status(201).json(newBook.lastInsertRowid, newBook)
    }
    catch(err)
    {
        res.status(500).json({message : `${err}`})
    }
})

app.delete("/books/:id", (req, res) => {
    try{
        const id = req.params.id
        if(!id)
        {
          return res.status(404).json({message: "nem található ilyen id"})
        }
        const deletedBook = db.deleteBook(id)
        if(deletedBook.changes != 1)
            {
                return res.status(501).json({message: "nem lehetett törölni"})
            }
    
        res.status(200).json({message: "sikeresen törölve"})
    }
    catch(err)
    {
        res.status(500).json({message : `${err}`})
    }
})

app.listen(port, () =>{
    console.log("Fut az adatbázis")
})