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
		var dx = (myX - this.x) * this.speed / d;
		var dy = (myY - this.y) * this.speed / d;
		this.x += dx;
		this.y += dy;
	}
	draw() {
		context.fillStyle = "red";
		context.fillRect(this.x, this.y, 100, 100);
	}
}