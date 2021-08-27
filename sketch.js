var garden,rabbit;
var gardenImg,rabbitImg;
var appleimage, apple;
var leavesimageo,leavesimageg , leavesimager, leaves;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage = loadImage("apple.png")
  leavesimageo= loadImage ("orangeLeaf.png")
  leavesimageg= loadImage("leaf.png")
  leavesimager = loadImage("redImage.png")
}
function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var b= Math.round(random(1,2))
  if(b===1){
    spawnapples()
  }
  else {
 spawnleaves()
  }
  

  drawSprites();
}
function spawnapples (){
  if(frameCount%80===0){
    apple=createSprite(random(50,350),40,10,10)
    apple.addImage(appleimage)
    apple.velocityY=3
    apple.lifetime=150
    apple.scale=0.08
  }

}
function spawnleaves (){
  if(frameCount%80===0){
    leaves=createSprite(random(50,350),40,10,10)
    leaves.velocityY=3
    

var a = Math.round(random(1,3))
if(a === 1 ) {
  leaves.addImage(leavesimageg)
}
else if(a===2 ) {
  leaves.addImage(leavesimager)
}
else {
  leaves.addImage(leavesimageo)
}
    leaves.lifetime=150
    leaves.scale=0.08
  }

}