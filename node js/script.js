//const express = require("express"); (régi írás)

import express from 'express'
import __dirname from "./util/toorPath.js"

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello')
})

app.get('/index', (req, res) =>{
    res.sendFile("./views/index.html", { root: __dirname })
})

app.listen(3000, () => {
    console.log("Server runs on port 3000")
})