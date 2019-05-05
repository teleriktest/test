class Rectangle {
  constructor(x, y, color, sizex, sizey){
  this.x = x;
  this.y = y;
  this.color = color;
  this.sizex = sizex;
  this.sizey = sizey;
  }
  draw(){
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.sizex, this.sizey);
  }
}