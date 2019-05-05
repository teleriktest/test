class Maxim2 {
    constructor(x,y,kind){
        this.x = x;
        this.y = y;
        this.kind = kind;
    }
    draw(){
        if(this.kind == 1) context.fillRect(this.x,this.y,100,30);
        if(this.kind == 2) context.fillRect(this.x,this.y,-100,30);
        if(this.kind == 3) context.fillRect(this.x,this.y,30,100);
        if(this.kind == 4) context.fillRect(this.x,this.y,30,-100);
}
