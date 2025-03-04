import express from 'express'
import path from 'path'
import __dirname from "./util/rootpath.js"
import * as fileHandler from "./util/filekezeles.js"


const app = express();
const PORT = 3000

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/books', (req, res) =>{
    const books = fileHandler.getData()
    res.json(books)
})

app.get('/books/:id', (req, res) =>{
    const books = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=books.length)
    {
        return res.status(404).json({message : "Book not found"})
    }

    res.status(200).json(books[id])   
})

app.post('/books', (req, res) =>{
    const books = fileHandler.getData()
    const {author, title, year} = req.body
    if(!author || !title ||!year)
    {
        return res.status(404).json({message : "Missing some data"})
    }
    const newBook = {author, title, year}
    books.push(newBook)
    fileHandler.saveData(books)
    res.status(201).json(newBook)
})

app.put('/books/:id', (req, res) =>{
    const books = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=books.length)
    {
        return res.status(404).json({message: "Book not found"})
    }
    const {author, title, year} = req.body
    if(!author || !title ||!year)
        {
            return res.status(400).json({message : "Missing some data"})
        }

    books[id] = {author, title, year}
   fileHandler.saveData(books)
   res.status(200).json(books[id])
})


app.delete('/books/:id', (req, res) =>{
    const books = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=books.length)
    {
       return res.status(404).json({message: "Book not found" })
    }

    books.splice(id, 1)
    fileHandler.saveData(books)
    res.status(200).json({message: "Delete successful" })
    
})

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})

