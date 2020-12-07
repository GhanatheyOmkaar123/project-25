
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1,dustbin1;


function preload(){
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
  world = engine.world;
	//Create the Bodies Here.
    paper1 = new Paper(100,400,40);
    ground1 = new Ground(600,450,1300,20);
    dustbin1 = new DustBin(800,400,50,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper1.display();
  ground1.display();
  dustbin1.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:70,y:-70});
	}
}

