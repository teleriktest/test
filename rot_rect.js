class RotRect {
  constructor() {
    this.x = Math.random() * 800;
    this.y = Math.random() * 600;
    this.angle =  Math.random() * 2 * Math.PI;
    this.speed = 5;
  }
  rot() {
    this.x += Math.cos(this.angle) * speed;
    this.y += Math.sin(this.angle) * speed;
  }
}
