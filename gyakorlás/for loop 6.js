import input from "./input.js"

let szam =parseInt(await input("kérem a számot: "))
let result =1
for (let i = 1; i < szam+1; i++) {
    result *= i;
  }

console.log(result)