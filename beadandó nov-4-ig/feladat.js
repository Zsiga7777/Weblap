function mixNumbers()
{
    let items = document.getElementsByClassName("grid-item");
    let numbers = [];
    for(let i = 0; i < 9; i++)
        {
            numbers.push(items[i].textContent)
        }
    
        let tempNumber
        let randomPosition
        for (let i = 0; i < 9; i++) {
            randomPosition = Math.round(Math.random()*10);
          if(randomPosition >=9)
            {
                randomPosition = 8;
            }

            tempNumber = numbers[randomPosition]
            numbers[randomPosition] = numbers[i]
            numbers[i] = tempNumber
        }

        for (let i = 0; i < 9; i++) {
            items[i].textContent = numbers[i];            
        }
    }