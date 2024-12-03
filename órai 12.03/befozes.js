import fs  from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import input from './input.js' 

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'uvegek.txt')

function fajlOlvasas()
{
    let content = ''
let rdata
try {
    content = fs.readFileSync(filePath, 'utf8')
    rdata = content
} catch(err) {
    console.log(err)
}
return rdata
}

let szamok = fajlOlvasas().split(", ").map(x => parseInt(x));

let lekvarMennyiseg = 0;

do
{
    lekvarMennyiseg = parseInt(await input("Kérem a befőzendő lekvár mennyiségét: "))
}
while(lekvarMennyiseg <= 0 || lekvarMennyiseg >= 200)
console.log(`2.feladat\nMari néni lekvárja (dl): ${lekvarMennyiseg}`);

let legnagyobbUrtartalom = 0;
let sorszama = 0;
let osszesKapacitás = 0;
for(let i = 0; i < szamok.length; i++)
{
    osszesKapacitás += szamok[i];
    if(legnagyobbUrtartalom < szamok[i])
    {
        sorszama = i+1;
        legnagyobbUrtartalom = szamok[i]
    }
}
console.log(`3.feladat\nA legnagyobb üveg: ${legnagyobbUrtartalom} dl és ${sorszama}. a sorban.`)
console.log("4.feladat")
if(lekvarMennyiseg <= osszesKapacitás)
{
    console.log("Elegendő üveg volt.")
}
else
{
    console.log("Maradt lekvár.")
}
