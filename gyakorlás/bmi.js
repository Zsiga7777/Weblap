import input from './input.js'

let mass =parseFloat(await input("Kérem a tömegét: "))
    let height =parseFloat(await input("Kérem a magasságát: "))
   let result = mass / (Math.pow(height,2))
   console.log(result)