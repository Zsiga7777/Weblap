import input from "./input.js"


let szam =parseInt(await input("Kérem a számot"))
    let result = ""
    
    
    for (let i = 0; i < szam; i++) 
      {
        if(i == 0 || i == szam-1)
        {
          for (let i = 0; i<szam; i++)
            {
              result += "%"
            }
            result += "\n"
            continue
        }
       for(let j = 0; j<szam-1; j++)
       {
        if(j == i)
        {
        result += "%"
        }
        else if(j == 0)
          {
            result += "%"
          }
          else
          {
            result += " "
          }
       }
       result += " %"
       result += "\n"
       
      } 
      
       
      
    console.log(result)