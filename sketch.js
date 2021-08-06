
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,600,10)
	ground = new Ground(400,680,800,20)
    leftDustbin = new Dustbin(550,620,20,100)
	rightDustbin = new Dustbin(670,620,20,100)
	bottomDustbin = new Dustbin(610,660,100,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  leftDustbin.display();
  rightDustbin.display();
  bottomDustbin.display();

  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.boby.position,{x:85, y:-85});
}
};