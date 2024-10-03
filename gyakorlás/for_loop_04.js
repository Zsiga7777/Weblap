import input from './input.js'

let szoveg =await input("")
    let result =""
    for (let i = 0; i < szoveg.length; i++) {
        result += szoveg[i] + "\n";
      }

   console.log(result)