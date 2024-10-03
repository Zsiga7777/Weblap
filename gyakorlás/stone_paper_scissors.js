import input from './input.js'

let p1 =parseInt(await input("első játékos: "))
    let p2 =parseInt(await input("második játékos: "))
     let result = ""
    if((p1== 1 && p2 == 3)|| (p1== 2 && p2 == 1) || (p1== 3 && p2 == 2))
    {
        result = "Első játékos nyert"
    }

    else if((p2== 1 && p1 == 3)|| (p2== 2 && p1 == 1) || (p2== 3 && p1 == 2))
        {
            result = "Második játékos nyert"
        }
        
    else
    {
        result = "Döntetlen"
    }


   console.log(result)