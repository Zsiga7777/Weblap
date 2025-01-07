function getCount(str) {
    let vowels = ["a","e","i","o","u"];
    let count = 0;
    for(let i = 0; i < str.length; i++)
      {
        if(vowels.includes(str[i]))
          {
            count++
          }
      }
    return count
  }
  function filter_list(l) {
    let result = [];
    for(let i = 0; i < l.length; i++)
      {
        if(Number.isInteger(l[i]))
          {
            result.push(l[i])
          }
      }
    return result
  }

  function hasUniqueChars(str){
    let characters = [];
    for(let i = 0; i < str.length; i++)
      {
        if(characters.includes(str[i]))
          {
            return false
          }
        else
          {
            characters.push(str[i])
          }
      }
    return true
    }

    function divisors(integer) {
        let divisors = [];
        for(let i = 2; i < integer; i++)
          {
            if(integer % i == 0)
              {
                divisors.push(i)
              }
          }
        if(divisors.length == 0)
          {
            return `${integer} is prime`
          }
        else
          {
            return divisors
          }
        
      }