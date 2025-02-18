import express from 'express'
import __dirname from "./uti/rootpath.js"

const app = express();
app.use(express.json())
const flowers = [{"name" : "tulipán", "category": "évelő"}, {"name": "muskátli", "category": "egynyári"}]
const trees = [{"name" : "almafa", "category": "évelő"}, {"name": "szilvafa", "category": "évelő"}]

app.get('/', (req, res) =>{
    res.sendFile("./views/novenyek.html", { root: __dirname })
})

app.get('/flowers', (req, res) =>{
    res.json(flowers)
})

app.get('/trees', (req, res) =>{
    
    res.json(trees)
})

app.get('/plants/flowers', (req, res) =>{
    res.json(flowers)
})

app.get('/plants/trees', (req, res) =>{
    
    res.json(trees)
})

app.get('/plants/', (req, res) =>{
    res.json([])
})

app.get('/404', (req, res) =>{
    res.sendFile("./views/404.html", { root: __dirname })
})


app.get('/:parameter', (req, res) => {
    res.sendFile("./views/404.html", { root: __dirname })
})



app.listen(3010, () => {
    console.log("Server runs on port 3010")
})

