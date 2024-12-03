import { randomInt } from 'crypto'
import fs  from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const filePath = path.join(__dirname, 'dobasok.txt')

function faljIras(data){
try {
    fs.writeFileSync(filePath, data)
} catch(err) {
    console.log(err)
}
}


function fajlOlvasas()
{
    let content = ''
let rdata
try {
    content = fs.readFileSync(filePath, 'utf8')
    rdata =content
} catch(err) {
    console.log(err)
}
return rdata
}

function jatek(lepesek)
{
let lepesekSplitted = lepesek.split(", ")
let eredmeny = 0;
let eredmenyString = "";
let visszalepesSzamlalo = 0;
for(let i = 0; i<lepesekSplitted.length; i++)
{
    eredmeny +=parseInt(lepesekSplitted[i])
    if(eredmeny % 10 == 0)
        {
            eredmeny -= 3;
            visszalepesSzamlalo++;
        }
    if(eredmeny >=  45)
    {
        eredmeny = 45;
        eredmenyString = eredmenyString + `${eredmeny} `;
        break;
    }
    eredmenyString = eredmenyString + `${eredmeny} `
}
  
console.log(`\n2. feladat\n ${eredmenyString}`)
console.log(`3. feladat\n A játék során ${visszalepesSzamlalo} alkalommal lépett létrára.`)
console.log("4. feladat");
if(eredmeny >= 45)
{
    console.log("A játékot befejezte.")
}
else
{
    console.log("A játékot abbahagyta.")
}
}

function ujSzamSorHozzaadas()
{
    let lepesek = fajlOlvasas();
    let randomSzam = randomInt(1, 7)
    let newSting = `${randomSzam}`;
    for(let i = 0; i < 17; i++)
    {
        randomSzam = randomInt(1, 7);
        newSting += `, ${randomSzam}`;
    }
    lepesek += `\n${newSting}`
    faljIras(lepesek)
}

ujSzamSorHozzaadas()
let lepesek = fajlOlvasas();
let sorok = lepesek.split("\n");

for(let i = 0; i < sorok.length; i++)
{
    jatek(sorok[i])
}