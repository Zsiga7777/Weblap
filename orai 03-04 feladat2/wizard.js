import express from 'express'
import path from 'path'
import __dirname from "./util/rootpath.js"
import * as fileHandler from "./util/filekezeles.js"


const app = express();
const PORT = 3000

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.get('/wizard', (req, res) =>{
    const wizards = fileHandler.getData()
    res.json(wizards)
})

app.get('/wizard/:id', (req, res) =>{
    const wizards = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=wizards.length)
    {
        return res.status(404).json({message : "wizard not found"})
    }

    res.status(200).json(wizards[id])   
})

app.post('/wizard', (req, res) =>{
    const wizards = fileHandler.getData()
    const {name, magicWand, house} = req.body
    if(!name || !magicWand ||!house)
    {
        return res.status(404).json({message : "Missing some data"})
    }
    const newwizard = {name, magicWand, house}
    wizards.push(newwizard)
    fileHandler.saveData(wizards)
    res.status(201).json(newwizard)
})

app.put('/wizard/:id', (req, res) =>{
    const wizards = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=wizards.length)
    {
        return res.status(404).json({message: "wizard not found"})
    }
    const {name, magicWand, house} = req.body
    if(!name || !magicWand ||!house)
        {
            return res.status(400).json({message : "Missing some data"})
        }

    wizards[id] = {name, magicWand, house}
   fileHandler.saveData(wizards)
   res.status(200).json(wizards[id])
})


app.delete('/wizard/:id', (req, res) =>{
    const wizards = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=wizards.length)
    {
       return res.status(404).json({message: "wizard not found" })
    }

    wizards.splice(id, 1)
    fileHandler.saveData(wizards)
    res.status(200).json({message: "Delete successful" })
    
})

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})

