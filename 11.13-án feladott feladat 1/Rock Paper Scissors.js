const rps = (p1, p2) => {
    if((p1 == "scissors" && p2 == "rock") || (p1 == "rock" && p2 == "paper") || (p1 == "paper" && p2 == "scissors") )
      {
        return "Player 2 won!"
      }
    else if((p2 == "scissors" && p1 == "rock") || (p2 == "rock" && p1 == "paper") || (p2 == "paper" && p1 == "scissors"))
      {
        return "Player 1 won!"
      }
    else
      {
        return "Draw!"
      }
  };