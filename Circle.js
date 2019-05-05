class Circle{
    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
    }
    function draw(){
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        context.closePath();
    }
    
}