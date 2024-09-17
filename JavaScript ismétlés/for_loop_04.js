function szamolas()
{
    let szoveg =document.getElementById("szoveg").value
    let result =""
    for (let i = 0; i < szoveg.length; i++) {
        result += szoveg[i] + "<br>";
      }

    document.getElementById("eredmeny").innerHTML = `Result:<br> ${result} `
}