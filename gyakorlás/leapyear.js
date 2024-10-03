import input from "./input.js";

const year  = parseInt(await input("adja meg az évet: "))

let result  = ""
if (year % 4 == 0  && (year %100 != 0 || year % 400 == 0))
{
    console.log(`${year}, szökőév`)
}
else
{
    console.log(`${year}, nem szökőév`)
}