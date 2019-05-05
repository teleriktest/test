class RotRect {
  constructor() {
    this.x = 200 + Math.random() * 500;
    this.y = 100 + Math.random() * 400;
    this.angle =  Math.random() * 2 * Math.PI;
  }
  rot() {
    this.angle += 0.05;
  }
  draw() {
    context.translate(this.x, this.y);
    context.rotate(this.angle);
    context.fillStyle = "Purple";
    context.fillRect(-50, -50, 100, 100);
    context.rotate(-this.angle);
    context.translate(-this.x, -this.y);
  }
}
