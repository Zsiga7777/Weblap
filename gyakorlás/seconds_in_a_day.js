import input from "./input.js"

let hour =parseInt(await input("Kérem az órát: "))
    let min =parseInt(await input("Kérem az percet: "))
    let sec =parseInt(await input("Kérem az másodpercet: "))

    let currentTime = new Date(2024,8,17,hour,min,sec)
    let MaxTime = new Date(2024,8,17,24,0,0)
    let result = (MaxTime - currentTime)/1000
    console.log(result)