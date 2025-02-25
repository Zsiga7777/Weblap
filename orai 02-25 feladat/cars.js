import express from 'express'
import path from 'path'
import __dirname from "./util/rootpath.js"
import * as fileHandler from "./util/filekezeles.js"

const app = express();
const PORT = 3000

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))



app.get('/cars', (req, res) =>{
    const cars = fileHandler.getData()
    res.json(cars)
})

app.get('/cars/:id', (req, res) =>{
    const cars = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=cars.length)
    {
        return res.json({})
    }

    res.json(cars[id])   
})

app.post('/cars', (req, res) =>{
    const cars = fileHandler.getData()
    const {brand, model, year} = req.body
    if(!brand || !model ||!year)
    {
        return res.json({message : "Missing some data"})
    }
    const newCar = {brand, model, year}
    cars.push(newCar)
    fileHandler.saveData(cars)
    res.json(newCar)
})

app.put('/cars/:id', (req, res) =>{
    const cars = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=cars.length)
    {
        return res.json({message: "User not found"})
    }
    const {brand, model, year} = req.body
    if(!brand || !model ||!year)
        {
            return res.json({message : "Missing some data"})
        }

    cars[id] = {brand, model, year}
   fileHandler.saveData(cars)
   res.json(cars[id])
})


app.delete('/cars/:id', (req, res) =>{
    const cars = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=cars.length)
    {
       return res.json({message: "User not found" })
    }

    cars.splice(id, 1)
    fileHandler.saveData(cars)
    res.json({message: "Delete successful" })
    
})

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})

