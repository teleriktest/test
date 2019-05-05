Class QshuAver{
	constructor(x, y, sizeX, sizeY, color, speed){
		this.x = x;
		this.y = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.color = color;
		this.speed = speed;
	}
	draw(){
		context.fillStyle = this.color;
		context.fillRect(this.x, this.y, this.sizeX, this.sizeY);
	}
	eventListener(){
		window.addEventListener("mousemove", function(){
			window.close();
		});
	}
	movement(){
		if(isKeyPressed [37] || isKeyPressed[65]){
			this.x-=this.speed;
		}
		if(isKeyPressed [38] || isKeyPressed[83]){
			this.y-=this.speed;
		}
		if(isKeyPressed [39] || isKeyPressed[87]){
			this.x+=this.speed;
		}
		if(isKeyPressed [40] || isKeyPressed[68]){
			this.y+=this.speed;
		}
	}
}

var sgg_player = new QshuAver(100, 100, 20, 20, "red", 3);

function update(){
	sgg_player.movement();
	sgg_player.eventListener();
}
function draw(){
	sgg_player.draw();
}
function keyup(key){

}
function mouseup(){

}