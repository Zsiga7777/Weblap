let text = "a kedvenc számom: 45";
let text2 = " másik kedvenc számom: 5 "
console.log(text);

console.log(text.charAt(2))
console.log(text.at(-3))

console.log(text.slice(2,9))
console.log(text.substring(2,9))

console.log(text.slice(-10))
console.log(text.substring(10))

console.log(text.substr(2,8))

console.log(text.toUpperCase())
console.log(text.slice(-10).toUpperCase())

console.log(text.concat(text2) )

console.log("<<"+text2 + ">>")
console.log("<<"+text2.trim() + ">>")
console.log("<<"+text2.trimEnd() + ">>")
console.log("<<"+text2.trimStart() + ">>")

console.log("haza akarok menni ".repeat(10))

console.log(text.replace("számom","sajtom"))
console.log(text.replaceAll("e","o"))

console.log(text.split(" "))
console.log(text.split(""))
console.log(text.split())
