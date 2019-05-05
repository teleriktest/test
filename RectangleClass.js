// Creating variables
var myX = 0, myY = 0;
class OrielRectangle{
		constructor(){
			this.x=100;
			this.y=100;
			this.speed=5;
			
		}
	update(){
		if(isKeyPressed[87]){
			this.y-=this.speed;
		}
		if(isKeyPressed[83]){
			this.y+=this.speed;
		}
		if(isKeyPressed[65]){
			this.x-=this.speed;
		}
		if(isKeyPressed[68]){
			this.x+=this.speed;
		}
	}
	draw(){
		context.fillRect(this.x,this.y,100,100)
	}
	}
a = new OrielRectangle();
function update() {
   a.update();
}

function draw() {
   a.draw();
};





