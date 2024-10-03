import input from "./input.js"

let szam =parseInt(await input("Kérek egy számot"))
    let result = ""
    for (let i = 1; i < szam+1; i++) {
        if(i % 3 == 0 &&i % 5 == 0)
        {
          result += "fizzbuzz, "
        }
        else if(i % 5 == 0)
        {
          result += "buzz, "
        }
        else if(i % 3 == 0)
          {
            result += "fizz, "
          }
          else
          {
            result += `${i}, `
          }
      }

   console.log(result)