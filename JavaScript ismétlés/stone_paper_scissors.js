function szamolas()
{
    let p1 =parseInt(document.getElementById("player1").value)
    let p2 =parseInt(document.getElementById("player2").value)
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


    document.getElementById("eredmeny").innerHTML = `Result: ${result} `
}