let snake;
let res = 20;
let food;
let w;
let h;


function setup() {

  createCanvas(400, 400);
  snake = new Snake();
  frameRate(10);
  w = floor(width / res);
  h = floor(height / res);
  foodLocation();
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h)); 
  food = createVector(x, y);

}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  }
}

function draw() {
  noStroke();
  scale(res);
  background(220);
  snake.update();
  if(snake.eat(food)) {
    foodLocation();
  }
  if (snake.endGame()) {
    print("End game");
    background(255, 0, 0);
    noLoop();
  }
  snake.show();
  
  fill(255, 0, 0);
  rect( food.x, food.y, 1, 1);
}

