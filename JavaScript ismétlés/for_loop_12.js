function szamolas()
{
    let szam =document.getElementById("szam").value
    let darabszam = 0
    let result = 0
    for (let i = 0; i < szam.length; i++) {
        result += parseInt(szam[i]);
        darabszam++
      }
      result = result/darabszam

    document.getElementById("eredmeny").innerHTML = `${szam} számjegyeinek átlaga ${result} `
}