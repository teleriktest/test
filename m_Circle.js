class moni04sCircle{
    constructor(x_, y_, r_, color_){
    this.x = x_;
    this.y = y_;
    this.r = r_;
    this.color = color_;
    }
    draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, Math.PI*2);
        context.fillStyle = this.color;
        context.fill();
    }
    move(){
        if (isKeyPressed[68]){
            this.x += 5
        }
        if (isKeyPressed[65]){
            this.x -= 5
        }
        if (isKeyPressed[87]){
            this.y -= 5
        }
        if (isKeyPressed[83]){
            this.y += 5
        }
    }
}
