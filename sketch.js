let ball,
  i = 0,
  paddle,
  score,
  displayScore,
  balls = [],
  value = [80],
  message,
  winner,
  display;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.position(850, 50);
  ball = new Ball(random(20, 450), random(20, 200), -5, 5);
  paddle = new Paddle();
  score = new Score();
  restartButton = select("#restart");
  restartButton.mousePressed(restart);
}

function draw() {
  background(167, 167, 219);
  ball.move();
  ball.display();
  ball.bounce();
  paddle.display();
  paddle.moveX(mouseX);
  score.display();

  if (score.score > value[i] && ball.y < 300) {
    let b = new Ball(random(10, 450), random(10, 200), -5, 5);
    balls.push(b);
    i++;
  }

  for (let j = 0; j < balls.length; j++) {
    balls[j].move();
    balls[j].display();
    balls[j].bounce();
    balls[j].paddleBounce(j);
    if (balls[j].y > height && score.score < 120) {
      stopArr();
      stop();
      gameOver();
    }
  }

  if (ball.y > height && score.score < 120) {
    stop();
    gameOver();
    stopArr();
  } else if (score.score >= 120) {
    stop();
    gameWin();
    stopArr();
  }

  if (ball.y >= 460 && ball.x >= paddle.x - 50 && ball.x <= paddle.x + 70) {
    ball.yspeed *= -1;
    score.score += 4;
  }
}
