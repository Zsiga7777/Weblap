function szamolas()
{
    let a =parseFloat(document.getElementById("oldal1").value)
    let b =parseFloat(document.getElementById("oldal2").value)
    let c =parseFloat(document.getElementById("oldal3").value)
    let surfaceArea = 2*(a*b+b*c+c*a)
    let valume = a*b*c
    document.getElementById("eredmeny").innerHTML = `surface area: ${surfaceArea} <br> valume: ${valume}`
}