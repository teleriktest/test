var myX, myY;
var m_circles = [];
for (let i = 0; i < 5; ++i){
    m_circles[i] = new moni04sCircle(Math.random()*700, Math.random()*500, 10, "red");
}
function update() {
    myX = mouseX;
    myY = mouseY;
    for (let i = 0; i < 5; ++i){
        m_circles[i].move();
    }
}
function draw() {
    context.fillStyle = "blue";
    context.fillRect(100, 200, 100, 200);
    context.fillStyle = "red";
    context.fillRect(myX, myY, 100, 200);
    for (let i = 0; i < 5; ++i){
        m_circles[i].draw();
    }
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
