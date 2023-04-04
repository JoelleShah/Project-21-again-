
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var leftside, rightside
var ground 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground=new Ground(width/2,690,width,20)
    leftSide = new Ground(110,600,20,120)
	rigthSide = new Ground(600,110,20,120)

	//Create the Bodies Here.
 var ball_options={
	isStatic:false,
	restutution:0.3,
	friction:0,
	density:1.2,
}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  leftside.display();
  rightside.display();
 
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.09,y:0})
	}
}
