import express from 'express'
import path from 'path'
import __dirname from "./util/rootpath.js"
import wizardsRoutes from './routes/WizardRoutes.js'


const app = express();
const PORT = 3000

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

app.use("/api", wizardsRoutes)

app.listen(PORT, () => {
    console.log(`Server runs on port ${PORT}`)
})

