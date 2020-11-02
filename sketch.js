
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

	Engine.run(engine);

	ground= new Ground(400,700,800,20);
	rect1=new Rect(550,680,20,200);
	rect2=new Rect(615,680,150,20);
	rect3=new Rect(700,680,20,200);
	paper=new Paper(25);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  up();
  background(0);
  drawSprites();
  ground.display();
  rect1.display();
  rect2.display();
  rect3.display();
  paper.display();
}

function up()
{
if(keyWentDown("up_arrow")){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
}
}


