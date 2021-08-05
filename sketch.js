var ball;

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,12,12);
  ball.shapeColor = "red";
}

function draw() 
{
  background(30);
 
  if (keyDown('RIGHT_ARROW')){
    ball.x = ball.x+4;
  }
  if (keyDown("LEFT_ARROW")){
    ball.x = ball.x-4;
  }
  if (keyDown("UP_ARROW")){
    ball.y = ball.y-4;
  }
  if (keyDown("DOWN_ARROW")){
    ball.y = ball.y+4;
  }
  drawSprites();
}




