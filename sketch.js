var fixedRect, movingRect;
var gameobject1,gameobject2,gameobject3,gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1=createSprite(100,300,50,50);
  gameobject1.shapeColor="blue";
  gameobject2=createSprite(200,300,50,50);
  gameobject2.shapeColor="red";
  gameobject3=createSprite(300,300,50,50);
  gameobject3.shapeColor="yellow";
  gameobject4=createSprite(400,300,50,50);
  gameobject4.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameobject2)) {
    movingRect.shapeColor = "purple";
    gameobject2.shapeColor = "purple";
  }
  else {
    movingRect.shapeColor = "brown";
    gameobject2.shapeColor = "brown";
  }
  
  drawSprites();
}
function isTouching(objectone,object2){
  if (objectone.x - object2.x < object2.width/2 + objectone.width/2
    && object2.x - objectone.x < object2.width/2 + objectone.width/2
    && objectone.y - object2.y < object2.height/2 + objectone.height/2
    && object2.y - objectone.y < object2.height/2 + objectone.height/2) {
 return true
}
else {
  return false 
}

}