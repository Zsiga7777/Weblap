function maskify(cc) {
    let result = "";
  if(cc.length > 4)
    {
      for(let i = 0; i < cc.length -4; i++)
        {
          result += "#";
        }
      result += `${cc[cc.length-4]}${cc[cc.length-3]}${cc[cc.length-2]}${cc[cc.length-1]}`;
    }
    else
      {
        result = cc;
      }
    return result;
  }

  function isTriangle(a,b,c)
{
   if(a <=0 || b <= 0 || c <= 0)
     {
       return false;
     }
  else if(a +b <= c || a + c <= b || c + b <= a)
    {
      return false;
    }
  else
    {
      return true;
      }
  
  
}

function timeConvert(num) { 

    let minutes = 0;
    let hours = 0;
   
    if(num <= 0)
      {
        return "00:00";     
      }
    
    hours = Math.floor(num /60);
    minutes = num - hours*60;
    
    if(hours >= 10 && minutes >= 10)
      {
        return `${hours}:${minutes}`;
      }
    else if( hours < 10 && minutes >=10)
      {
        return `0${hours}:${minutes}`;
      }
     else if( hours >= 10 && minutes < 10)
      {
        return `${hours}:0${minutes}`;
      }
    else
      {
         return `0${hours}:0${minutes}`;
      }
  
  }

  function createArrayOfTiers(num) {
    let result = [];
   let temp = "";
   num = `${num}`;
   
   for(let i = 0; i < num.length; i++)
     {
       temp += num[i];
       result.push(temp);
     }
   
   return result;
 }