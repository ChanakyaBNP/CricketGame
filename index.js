let scoreStr = localStorage.getItem("Score");
let score;
resetScore(scoreStr);

function resetScore(scoreStr) {
  score = scoreStr
    ? JSON.parse(scoreStr)
    : {
        win: 0,
        Lost: 0,
        Tie: 0,
      };

  score.displayScore = function () {
    return `Won: ${this.win},  Lost: ${this.Lost},  Tie: ${this.Tie}`;
  };

  showResult();
}

function getComputerChoice() {
  let randomNumber = Math.random() * 3;
  if (randomNumber >= 0 && randomNumber < 1) {
    return "Bat";
  } else if (randomNumber >= 1 && randomNumber < 2) {
    return "Ball";
  } else {
    return "Stump";
  }
}

function getResult(userMove, computerMove) {
  if (userMove === "Bat") {
    if (computerMove === "Bat") {
      score.Tie++;
      return "Match is Draw";
    } else if (computerMove === "Ball") {
      score.win++;
      return "You win the game";
    } else {
      score.Lost++;
      return "Computer is win";
    }
  } else if (userMove === "Ball") {
    if (computerMove === "Bat") {
      score.Lost++;
      return "Computer is win";
    } else if (computerMove === "Ball") {
      score.Tie++;
      return "Match is Draw";
    } else {
      score.win++;
      return "You win the game";
    }
  } else {
    if (computerMove === "Bat") {
      score.win++;
      return "You win the game";
    } else if (computerMove === "Ball") {
      score.Lost++;
      return "Computer is win";
    } else {
      score.Tie++;
      return "Match is Draw";
    }
  }
}

function showResult(userMove, computerMove, resultMsg) {
  localStorage.setItem("Score", JSON.stringify(score));

  document.querySelector("#user-move").innerText = userMove
    ? `Your choice is ${userMove}`
    : "";

  document.querySelector("#computer-move").innerText = computerMove
    ? `Computer Choice is ${computerMove}`
    : "";

  document.querySelector("#result").innerText = resultMsg || "";

  document.querySelector("#score").innerText = score.displayScore();
}
