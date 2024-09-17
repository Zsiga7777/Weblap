function szamolas()
{
    let mass =parseFloat(document.getElementById("mass").value)
    let height =parseFloat(document.getElementById("height").value)
   let result = mass / (Math.pow(height,2))
    document.getElementById("eredmeny").innerHTML = `Result: ${result} `
}