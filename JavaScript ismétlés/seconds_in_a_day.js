function szamolas()
{
    let hour =parseInt(document.getElementById("hour").value)
    let min =parseInt(document.getElementById("min").value)
    let sec =parseInt(document.getElementById("sec").value)

    let currentTime = new Date(2024,8,17,hour,min,sec)
    let MaxTime = new Date(2024,8,17,24,0,0)
    let result = (MaxTime - currentTime)/1000
    document.getElementById("eredmeny").innerHTML = `Result: ${result} s `
}