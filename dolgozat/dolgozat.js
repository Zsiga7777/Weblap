function stonePaperScissorsWinner(player1, player2) {
    //kódod helye
    if (player1 == player2) {
        return 'The game is a tie.'
    }
    else if (player1 == 0 && player2 == 2) {
        return 'The second player wins.'
    }
    else if (player1 == 1 && player2 == 0) {
        return 'The second player wins.'
    }
    else if (player1 == 2 && player2 == 1) {
        return 'The second player wins.'
    }
    else {
        return 'The first player wins.'
    }
}

function threeRuls() {
    //kódod helye
    let counter = 0;
    let ruleCounter = 1;
    let tomb = new Array()
    for (let i = 1; i < 51; i++) {
        if (i % 3 == 0) {
            counter++
            if (ruleCounter == 1 && counter == 1) {
                ruleCounter = 2
                counter = 0
                
            }
            else if (ruleCounter == 2 && counter == 2) {
                ruleCounter = 3
                counter = 0
                
            }
            else if (ruleCounter == 3 && counter == 3) {
                ruleCounter = 1
                counter = 0
                
            }
            else {
                tomb.push(i)
            }
        }
        else {
            tomb.push(i)
        }

    }
    return tomb
}

function factorial(number) {
    //kódod helye
    let fakt = 1
    for (let i = 1; i <= number; i++) {
        fakt += fakt * i
    }

    return fakt
}

function cuboid(a, b, c) {
    //kódod helye
    if (a <= 0 || b <= 0 || c <= 0) {
        return [0, 0]
    }

    let felszin = 2 * (a * b + a * c + b * c)
    let terfogat = a * b * c

    return [felszin, terfogat]
}
