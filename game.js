var myX, myY;
var rotRect = new RotRect();
function update() {
    myX = mouseX;
    myY = mouseY;
    rotRect.rot();
}
function draw() {
    context.fillStyle = "blue";
    context.fillRect(100, 200, 100, 200);
    context.fillStyle = "red";
    context.fillRect(myX, myY, 100, 200);
    rotRect.draw();
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
