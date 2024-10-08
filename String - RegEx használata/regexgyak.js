let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes."
let regex, result

Feladat1(text)
console.log(result)

Feladat2(text)
console.log(result)

Feladat3(text)
console.log(result)

Feladat4(text)
console.log(result)

Feladat5(text)
console.log(result)

Feladat6(text)
console.log(result)

function Feladat1(szov)
{
regex = /\b\d{2,3}\b/g
result = szov.match(regex)
}

function Feladat2(szov)
{
regex = /\b[2468]\d*\b/g
result = szov.match(regex)
}

function Feladat3(szov)
{
regex = /\b\d+[a-zA-Z]+\b/g
result = szov.match(regex)
}

function Feladat4(szov)
{
regex = /\b[A-Z][a-z]*\b/g
result = szov.match(regex)
}

function Feladat5(szov)
{
regex = /\b[A-Z][a-z]{2,}\b/g
result = szov.match(regex)
}

function Feladat6(szov)
{
regex = /\b[auioe]+\b/g
result = szov.match(regex)
}