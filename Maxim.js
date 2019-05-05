class Maxim {
    constructor(x,y,sx,sy,color,speed){
        this.x = x;
        this.y = y;
        this.sx = sx;
        this.sy = sy;
        this.color = color;
        this.speed = speed;
    }
    draw(){
        context.fillStyle = this.color;
        context.fillRect(this.x,this.y,this.sx,this.sy);
    }
    move(){
        if(isKeyPressed[68]) this.x+=this.speed;
        if(isKeyPressed[65]) this.x-=this.speed;
        if(isKeyPressed[83]) this.y+=this.speed;
        if(isKeyPressed[87]) this.y-=this.speed;
    }
    
}
