const fizzBuzz = n => {
    switch (true) {
        case n % 5 == 0 && n % 3 == 0:
            {
                return "FizzBuzz";
            }
        case n % 5 == 0:
            {
                return "Buzz";
            }
        case n % 3 == 0:
            {
                return "Fizz";
            }
        default:
            {
                return n
            }
    }
};

function myParseInt(str) {
    str = str.trim()
     if((/[a-zA-z. \t\n-]/g.test(str)))
       {
         return NaN
       }
     else
       {
        return parseInt(str)
         }
 }; 

function disemvowel(str) {
    let regex = /[euioa]/gi
    return str.replace(regex, "")
};

const rps = (p1, p2) => {
    if ((p1 == "scissors" && p2 == "paper") || (p1 == "paper" && p2 == "rock") || (p1 == "rock" && p2 == "scissors")) {
        return "Player 1 won!";
    }
    else if ((p2 == "scissors" && p1 == "paper") || (p2 == "paper" && p1 == "rock") || (p2 == "rock" && p1 == "scissors")) {
        return "Player 2 won!"
    }
    else
        return "Draw!"
};

function fizzbuzz(n)
{
 let result = [];
  for(let i = 1; i <= n ; i++)
    {
      if(i % 3 == 0 && i % 5 == 0)
        {
          result.push("FizzBuzz")
        }
      else if(i % 3 == 0)
        {
          result.push("Fizz")
        }
       else if(i % 5 == 0)
        {
          result.push("Buzz")
        }
      else
        {
          result.push(i)
        }
    }
  return result
}

console.log(myParseInt("111-111"))
