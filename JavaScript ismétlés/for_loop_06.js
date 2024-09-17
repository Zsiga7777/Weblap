function szamolas()
{
    let szam =parseInt(document.getElementById("szam").value)
    let result =1
    for (let i = 1; i < szam+1; i++) {
        result *= i;
      }

    document.getElementById("eredmeny").innerHTML = `${szam} faktoriálisa ${result} `
}