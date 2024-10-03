import input from './input.js'

   let maxPoint =parseInt(await input("Kérem a maximum pontszámot: "))
    let scoredPoint =parseInt(await input("Kérem az elért pontszámot: "))
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

    console.log(result)
