console.log(getOtosLotteryNumbers())

function getOtosLotteryNumbers()
{
    let szam = 0
    let szamok = new Array()
    for (let i = 0; i< 5; i++)
    {
        szam =Math.round(Math.random()*100)
        if(szamok)
        szamok.push(szam)
    }
    return szamok
} 