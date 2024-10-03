import input from "./input.js"

let szam = parseInt(await input("Kérek egy számot"))
    let darabszam = 0
    let result = 0
    for (let i = 0; i < szam.length; i++) {
        result += parseInt(szam[i]);
        darabszam++
      }
      result = result/darabszam

    console.log(result)