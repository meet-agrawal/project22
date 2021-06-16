var starImg,bgImg;fairyimg
var star, starBody;
var fairy,fairyVoice




//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyimg=loadAnimation("fairyimage1.png","fairyimage2.png")
	fairyVoice=loadSound("joyMusic.mp3")
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play()

fairy=createSprite(300,400,30,30)
fairy,addAnimation("fairyflying","fairyimg")
fairy.scale=0.2

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
 
	Engine.update(engine)
	
	
	background(bgImg);
fairy.velocityX=0
fairy.velocityY=0

star.x= starBody.position.x 
  star.y= starBody.position.y 

if(KeyDown(RIGHT_ARROW)){
fairy.velocityX=-6

}else if(KeyDown(LEFT_ARROW)){
	fairy.velocityX=-6

}else if(KeyDown(DOWN_ARROW)){
	star.velocityY=-3
}
	  
  if(star.y>470){
	  star.velocityY=0
  }

  console.log(star.y);

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
