window.addEventListener("load",()=>
{
    let result = ""
    let number = 10
    let oszto = 2
    while(number <= 30)
    {
      result += `${number}: `
      while(oszto <= number)
      {
        if(number % oszto == 0)
        {
          result += `${oszto}, `
        }
        oszto++
      }
      number++
      oszto = 2
      result += "<br>"
    }
    document.getElementById("eredmeny").innerHTML = `${result} `
})