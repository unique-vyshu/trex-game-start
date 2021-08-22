
var trex ,trex_running;
var ground;
var groundimage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale =0.5;

  ground= createSprite(200,180,400,20);
  ground.addImage(groundimage);
  ground.velocityX =-7;
 
}

function draw(){
  background("white");

  if(keyDown("space")){
    trex.velocityY =-7;
  }
  trex.velocityY = trex.velocityY +0.8;
 if(ground.x <0){
   ground.x =200;
 }
  trex.collide(ground);
  drawSprites();

}
