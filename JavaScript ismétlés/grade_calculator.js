function szamolas()
{
    let maxPoint =parseInt(document.getElementById("maxPoint").value)
    let scoredPoint =parseInt(document.getElementById("scoredPoint").value)
   let scorePercentage = (scoredPoint/maxPoint)*100

   var result = ""
   if(scorePercentage > 100)
   {
        result = "A+"
   }

else if( scorePercentage >=85)
{
    result = "A"
} 
else if( scorePercentage >=70)
{
    result = "B"
} 
else if( scorePercentage >=50)
{
    result = "C"
} 
else if( scorePercentage >=35)
{
    result = "D"
} 
else
{
    result = "F"
 }

    document.getElementById("eredmeny").innerHTML = `Result: ${result} `
}