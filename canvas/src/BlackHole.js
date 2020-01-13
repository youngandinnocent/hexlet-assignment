import Shape from './Shape';

// BlackHole class
export default class extends Shape {
  constructor(x, y, exists) {
    super(x, y, 20, 20, exists);

    this.color = 'white';
    this.size = 20;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds(width, height) {
    if (this.x + this.size >= width) {
      this.x -= this.size;
    } else if (this.x - this.size <= 0) {
      this.x += this.size;
    }
    if (this.y + this.size >= height) {
      this.y -= this.height;
    } else if (this.y - this.size <= 0) {
      this.y += this.size;
    }
  }

  setControls() {
    const _this = this;
    window.addEventListener('keydown', (e) => {
      if (e.key === 'a') {
        _this.x -= _this.velX;
      } else if (e.key === 'd') {
        _this.x += _this.velX;
      } else if (e.key === 'w') {
        _this.y -= _this.velY;
      } else if (e.key === 's') {
        _this.y += _this.velY;
      }
    });
  }

  collisionDetect(coll, c, p) {
    coll.forEach((ball) => {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance < this.size + ball.size) {
          ball.exists = false;
          let count = c;
          count -= 1;
          const paragraph = p;
          paragraph.textContent = `Ball count: ${count}`;
        }
      }
    });
  }
}
