var myX, myY;
var enemy1 = new Enemy(Math.random() * 800, Math.random() * 600, 10);
function update() {
    myX = mouseX;
    myY = mouseY;
	enemy1.ai();
}
function draw() {
    context.fillStyle = "blue";
    context.fillRect(100, 200, 100, 200);
    context.fillStyle = "red";
    context.fillRect(myX, myY, 100, 200);
	enemy1.draw();
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
