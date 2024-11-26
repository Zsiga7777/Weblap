import input from './input.js' 

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

let numberOfPeople =Math.abs(parseInt(await input("Kérem az adatok számát: ")));
let datas = [];
let name;
let email;
for(let i = 0; i < numberOfPeople; i++)
{
    name = await input("Kérem a tanuló nevét:  ");
    email = await input("Kérem a tanuló emailcímét: ");
    datas.push(new Person(name, email));
}

for(let i = 0; i <datas.length; i++)
{
    console.log(`Név: ${datas[i].name}, email címe: ${datas[i].email}`);

}