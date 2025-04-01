import express from "express";
import { dbAll, initializeDatabse, dbGet, dbRun} from "./util/database.js";

const app = express()
app.use(express.json())

app.get("/wizards", async (req, res) =>
{
    const wizards = await dbAll("SELECT * FROM wizards");
    res.status(200).json(wizards)
})

app.get("/wizards/:id", async (req, res) =>
{
    const wizard = await dbGet("SELECT * FROM wizards WHERE id = ?;", [req.params.id])
    if(!wizard)
    {
        return res.status(404).json({message : "wizard not found"})
    }
    res.status(200).json(wizard)
})

app.post("/wizards", async (req, res) => {
    const {name, magicWand, house} = req.body;
    if(!name || !magicWand || !house)
    {
        return res.status(404).json({message : "invalid data"})
    }
    const result = await dbRun('INSERT INTO wizards(name, magicWand, house) VALUES (?, ?, ?);', [name, magicWand, house]);

    res.status(201).json({id : result.lastID, name, magicWand, house});
})

app.put('/wizards/:id', async (req, res) =>
{
    const id = req.params.id;
    const wizard = await dbGet("SELECT * FROM wizards WHERE id = ?;", [id])
    if(!wizard)
    {
        return res.status(404).json({message : "wizard not found"})
    }
    const {name, magicWand, house} = req.body;
    if(!name || !magicWand || !house)
        {
            return res.status(404).json({message : "Missing data"})
        }
    dbRun("UPDATE wizards SET name = ?, magicWand = ?, house = ?  WHERE id = ?;", [name, magicWand, house, id])
    res.status(200).json({id, name, magicWand, house})
})

app.delete('/wizards/:id', async (req, res) =>
{
    const id = req.params.id;
    const wizard = await dbGet("SELECT * FROM wizards WHERE id = ?;", [id])
    if(!wizard)
    {
        return res.status(404).json({message : "wizard not found"})
    }
    dbRun("DELETE FROM wizards WHERE id = ?;", [id])
    res.status(200).json({message: "Delete successful"})
})

app.use((req, res, next, err) => {
    if(err)
    {
        res.status(500).json({message : `Error : ${err.message}`});
    }
}) 

async function startServer() {
    await initializeDatabse()
    app.listen(3000, ()=> {
        console.log("Server is running")
    })
}

startServer()