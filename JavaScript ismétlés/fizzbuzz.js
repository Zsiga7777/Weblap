function szamolas()
{
    let szam =parseInt(document.getElementById("szam").value)
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

    document.getElementById("eredmeny").innerHTML = `${result} `
}