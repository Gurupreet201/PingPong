function stop() {
  ball.xspeed = 0;
  ball.yspeed = 0;
  ball.x = 300;
  ball.y = 200;
}

function stopArr() {
  for (let j = 0; j < balls.length; j++) {
    balls[j].xspeed = 0;
    balls[j].yspeed = 0;
    balls[j].x = 300;
    balls[j].y = 200;
  }
}

function gameWin() {
  winner = createElement("h3", "You Win!!");
  winner.style("color", "#4bb543");
  winner.style("font-size", "1.8rem");
  winner.style("margin-bottom", "4px");
  winner.style("position", "absolute");
  winner.style("left", "1030px");
  winner.style("top", "590px");
  winner.style("visibility", "visible");
  display = createElement("h3", `Your score is ${score.score}`);
  display.style("color", "#000");
  display.style("font-size", "1.6rem");
  display.style("font-weight", "bold");
  display.style("margin-bottom", "4px");
  display.style("position", "absolute");
  display.style("left", "1015px");
  display.style("top", "645px");
  display.style("visibility", "visible");
}

function gameOver() {
  message = createElement("h3", "Game Over");
  message.style("color", "#ec3333");
  message.style("font-size", "1.8rem");
  message.style("font-weight", "700");
  message.style("margin-bottom", "4px");
  message.style("position", "absolute");
  message.style("left", "1020px");
  message.style("top", "590px");
  message.style("visibility", "visible");
  displayScore = createElement("h3", `Your score is ${score.score}`);
  displayScore.style("color", "#000");
  displayScore.style("font-size", "1.6rem");
  displayScore.style("font-weight", "700");
  displayScore.style("margin-bottom", "4px");
  displayScore.style("position", "absolute");
  displayScore.style("left", "1015px");
  displayScore.style("top", "645px");
  displayScore.style("visibility", "visible");
}

function visibilityOver() {
  message.style("visibility", "hidden");
  displayScore.style("visibility", "hidden");
}

function visibilityWin() {
  winner.style("visibility", "hidden");
  display.style("visibility", "hidden");
}

function restart() {
  ball.x = random(20, 450);
  ball.y = random(20, 200);
  ball.xspeed = -5;
  ball.yspeed = 5;
  score.score = 0;
  balls.shift();
  visibilityOver();
  visibilityWin();
}

class Score {
  constructor() {
    this.score = 0;
  }
  display() {
    textSize(32);
    text("Score:", 30, 50);
    text(this.score, 135, 50);
  }
}

class Paddle {
  constructor() {
    this.x = 700;
    this.y = 480;
  }
  display() {
    noStroke();
    fill(0);
    rect(this.x, this.y, 100, 15);
  }
  moveX(x) {
    if (x < width - 55 && x > 1) {
      this.x = x;
    }
  }
}

class Ball {
  constructor(x, y, xs, xy) {
    this.x = x;
    this.y = y;
    this.xspeed = xs;
    this.yspeed = xy;
  }
  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  display() {
    noStroke();
    fill(10);
    circle(this.x, this.y, 30);
  }
  bounce() {
    if (this.x > width - 15 || this.x < 15) {
      this.xspeed *= -1;
    }

    if (this.y < 15) {
      this.yspeed *= -1;
    }
  }
  paddleBounce(k) {
    if (
      balls[k].y >= 460 &&
      balls[k].x >= paddle.x - 50 &&
      balls[k].x <= paddle.x + 70
    ) {
      balls[k].yspeed *= -1;
      score.score += 4;
    }
  }
}
