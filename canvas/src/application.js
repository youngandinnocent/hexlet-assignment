import Ball from './Ball';
import BlackHole from './BlackHole';

export default () => {
  // paragraph for ball counter
  const p = document.querySelector('p');
  let count = 0;

  // define canvas
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // make balls
  const makeBall = (number) => {
    const balls = [];
    while (balls.length < number) {
      const ball = new Ball(
        random(0, width),
        random(0, height),
        random(-7, 7),
        random(-7, 7),
        true,
        `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
        random(10, 30),
      );
      balls.push(ball);
      count += 1;
      p.textContent = `Ball count: ${count}`;
    }
    return balls;
  };
  const numberOfBalls = 11;
  const balls = makeBall(numberOfBalls);

  // make black hole
  const hole = new BlackHole(random(0, width), random(0, height), true);
  hole.setControls();

  // run animation
  const animationLoop = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, width, height);

    balls.forEach((ball) => {
      if (ball.exists) {
        ball.draw(ctx);
        ball.update(width, height);
        ball.collisionDetect(balls);
      }
    });

    hole.draw(ctx);
    hole.checkBounds(width, height);
    hole.collisionDetect(balls, count, p);

    requestAnimationFrame(animationLoop);
  };

  animationLoop();
};
