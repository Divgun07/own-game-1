
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	drop=loadImage("images/drop.jpg");
	emptyGlass=loadImage("images/empty glass.jpg");
	filledGlass=loadImage("images/filled glass.jpg");
	gameEnded=loadImage("images/game ended button.png");
	gameStarted=loadImage("images/game started button.png");
	Ready=loadImage("images/ready button.png");
	hand=loadImage("images/hand.PNG");
	splash=loadImage("images/splash.jpg");
	tap=loadImage("images/tap.jpg");
	water=loadImage("images/water(smile).jpg");
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



