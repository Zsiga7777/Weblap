const fizzBuzz = n => {
    switch(true)
      {
      case(n % 3 == 0 && n % 5 == 0):
      {
        return "FizzBuzz";
      }
       case(n % 3 == 0):
          {
          return "Fizz";
      }
     case(n % 5 == 0):
     {
     return "Buzz";
   }
   default:
   {
   return n;
   }
          }
   };Math.ceil