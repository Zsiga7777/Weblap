import input from './input.js'
let szoveg =await input("Kérek egy szöveget:")
    let result = ""
    let szamok = /[1-9]/
    
    for (let i = 0; i < szoveg.length; i++) 
      {
        if(!szamok.test(szoveg[i]))
        {
          result += `${szoveg[i]} `
        }
        else
        {
          break
        }
      } 
      
   console.log(result)