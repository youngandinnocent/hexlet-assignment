import Ball from './Ball';

export default () => {
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  const width = canvas.width = window.innerWidth;
  const height = canvas.height = window.innerHeight;

  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  const balls = [];
  const ballCounter = 11;

  const animationLoop = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < ballCounter) {
      const ball = new Ball(
        random(0, width),
        random(0, height),
        random(-7, 7),
        random(-7, 7),
        `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
        random(10, 30),
      );
      balls.push(ball);
    }

    balls.forEach((ball) => {
      ball.drow(ctx);
      ball.update(width, height);
      ball.collisionDetect(balls);
    });

    requestAnimationFrame(animationLoop);
  };

  animationLoop();
};
