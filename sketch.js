var fixedRect;
var movingRect;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(200,100,50,100);

  movingRect.shapeColor ="green";
  fixedRect.shapeColor = "green";

   //debugMode On for Sprites
   movingRect.debug = true;
   fixedRect.debug = true;
}

function draw() {
  background(0); 
 
  //make the movingRect movable using mouse
  movingRect.x=World.mouseX;
  movingRect.y = World.mouseY;

  //Get Distance Between 2 rectangle's center using width when 
  //they are touching each other from left or right
  var distUsingWidth = fixedRect.width/2 +movingRect.width/2;

  //Get Distance Between 2 rectangle's center using height when 
  //they are touching each other from top or bottom
  var distUsingHeight = fixedRect.height/2 +movingRect.height/2;

  //algorithm to detect if movingRect is touching with fixedRect
  
  if(/*if the rectangles are touching from left or right*/
    (movingRect.x-fixedRect.x<=distUsingWidth) &&
  (fixedRect.x-movingRect.x<=distUsingWidth) &&
  /*if the rectangles are touching from top or bottom */
  (movingRect.y - fixedRect.y <= distUsingHeight) &&
  (fixedRect.y - movingRect.y<=distUsingHeight)){
    //change the color of the rectangles to red
    movingRect.shapeColor ="red";
    fixedRect.shapeColor = "red";
  }
  else {
    //dont change the color of the rectangles
    movingRect.shapeColor ="green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();
}