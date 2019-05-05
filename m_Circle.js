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
}
var m_circles = [];
for (let i = 0; i < 5; ++i){
    m_circles[i] = new moni04sCircle(Math.random()*700, Math.random()*500, 10, "red");
}
function update(){

}
function draw(){
    for (let i = 0; i < 5; ++i){
        m_circles[i].draw();
    }
}