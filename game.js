var myX, myY;

function dist(x1, y1, x2, y2) {
	return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
}

class Enemy {
	constructor(x, y, speed) {
		this.x = x;
		this.y = y;
		this.speed = speed;
	}
	ai() {
		var d = dist(this.x, this.y, myX, myY);
		var dx = (this.x - myX) * this.speed / dist;
		var dy = (this.y - myY) * this.speed / dist;
		this.x += dx;
		this.y += dy;
	}
}
function update() {
    myX = mouseX;
    myY = mouseY;
}
function draw() {
    context.fillStyle = "blue";
    context.fillRect(100, 200, 100, 200);
    context.fillStyle = "red";
    context.fillRect(myX, myY, 100, 200);
};
function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
