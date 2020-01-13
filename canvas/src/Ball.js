import Shape from './Shape';

// Ball class
export default class extends Shape {
  constructor(x, y, velX, velY, exists, color, size) {
    super(x, y, velX, velY, exists);

    this.color = color;
    this.size = size;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update(width, height) {
    if ((this.x + this.size >= width) || (this.x - this.size <= 0)) {
      this.velX = -(this.velX);
    }
    if ((this.y + this.size >= height) || (this.y - this.size <= 0)) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect(coll) {
    coll.forEach((ball) => {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance < this.size + ball.size) {
          ball.color = this.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        }
      }
    });
  }
}
