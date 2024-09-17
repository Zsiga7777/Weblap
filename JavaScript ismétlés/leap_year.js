function szamolas()
{
    let year =parseInt(document.getElementById("year").value)
     let result = ""
if(year%4 == 0)
{
     result = "leap year"
}
else
{
    result = "not leap year"
}

    document.getElementById("eredmeny").innerHTML = `Result: ${result} `
}