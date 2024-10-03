import input from './input.js'


const length  = await input("Kérem a hosszát:") ;
const width  = await input("Kérem a szélességét:");
const height  = await input("Kérem a magasságát:"); 
let area = 2* (length*width + width* height + length * height)
console.log(volume)
console.log(area)
