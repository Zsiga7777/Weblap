import * as fileHandler from "./util/filekezeles.js"

export const getAllwizards =(req, res) =>{
    const wizards = fileHandler.getData()
    res.json(wizards)
}

export const getwizardById =(req, res) =>{
    const wizards = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=wizards.length)
    {
        return res.status(404).json({message : "wizard not found"})
    }

    res.status(200).json(wizards[id])   
}

export const createwizard =(req, res) =>{
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
}

export const updatewizard = (req, res) =>{
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
}

export const deletewizard = (req, res) =>{
    const wizards = fileHandler.getData()
    const id =req.params.id;

    if(id < 0 || id >=wizards.length)
    {
       return res.status(404).json({message: "wizard not found" })
    }

    wizards.splice(id, 1)
    fileHandler.saveData(wizards)
    res.status(200).json({message: "Delete successful" })
    
}