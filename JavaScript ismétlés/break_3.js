function szamolas()
{
    let szoveg =document.getElementById("szoveg").value
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
      
       
      
    document.getElementById("eredmeny").innerHTML = `${result} `
}