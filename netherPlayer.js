class NetherPlayer{
    constructor(x_, y_, speed_, color_){
        this.x=x_;
        this.y=y_;
        this.sx=50;
        this.sy=50;
        this.speed=speed_;
        this.color=color_;
    }
    draw(){
        context.fillStyle=this.color;
        context.fillRect(this.x, this.y, this.sx, this.sy);
    }
    move(){
        if(isKeyPressed[65]){
           this.x-=this.speed;
        }
        if(isKeyPressed[68]){
           this.x+=this.speed;
        }
        if(isKeyPressed[87]){
           this.y-=this.speed;
        }
        if(isKeyPressed[83]){
           this.y+=this.speed;
        }
    }
}