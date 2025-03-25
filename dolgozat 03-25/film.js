import express from "express"


const app = express();
const port = 3000;

const films = [{title : "potter", director : "Béla", releaseYear: 2005, oscar: false},
    {title : "Csatahajó", director : "István", releaseYear: 2010, oscar: true},
    {title : "Sajtos tészta", director : "Géza", releaseYear: 2020, oscar: false}
];

app.use(express.json())

app.get("/api/movies", (req, res) =>{
    res.json(films)
})

app.get("/api/movies/:id", (req, res) =>{
    const id = req.params.id;
    if(id < 0 || id > films.length-1)
    {
      return res.json({"message" : "The id is not existing" });
    }
    res.json(films[id])
})

app.post("/api/movies", (req, res) =>{
    const {title, director, releaseYear, oscar} = req.body;

    if(!title || !director || !releaseYear || !oscar)
    {
       return res.json({"message" : "Something is missing" });
    }

    const newMovie =  {title, director, releaseYear, oscar};
    films.push(newMovie);

    res.json(newMovie);

})

app.put("/api/movies/:id", (req, res) =>{
    const id = req.params.id;
    const {title, director, releaseYear, oscar} = req.body;

    if(id < 0 || id > films.length-1)
        {
          return res.json({"message" : "The id is not existing" });
        }

    if(!title || !director || !releaseYear || !oscar)
    {
       return res.json({"message" : "Something is missing" });
    }

    films[id] = {title, director, releaseYear, oscar};
    res.json(films[id]);

})

app.delete("/api/movies/:id", (req, res) =>{
    const id = req.params.id;
    if(id < 0 || id > films.length-1)
        {
          return res.json({"message" : "The id is not existing" });
        }
    films.splice(id, 1)

    res.json({"message" : "deleted" })
})

app.listen(port, () =>
{
    console.log("fut a szerver");
})

