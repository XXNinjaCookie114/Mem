//ellipse
var b = 700;
//square
var x = 100;
var y = 25;
var sqr = 45;

//square movement 
var move = 0.5;
var grav = 2.5;

//square not moving
var NotMoving = false; 
var heightx = -35;

var enabler = 0;

function setup() {
  createCanvas(700, 300);
  
}

function draw() {
  background(45, 235, 255);
  
  //set boundry at bottom of canvas.
  push();
  strokeWeight(10);
  stroke(0);
  line(0, 300, 700, 300);
  pop();
  
  //Gargtan is what makes the square jump up and down.
  gargtan(); {
  square(25, y, 55);
  }
    
  //This moves the dots across the screen
  brutan(); {
  
  ellipseMode(CENTER);
  ellipse(b, 150, 25, 25);
  push();
  translate(-250, 20);
  ellipse(b, 250, 25, 25);
  pop();
  }
}
function gargtan() {
  noStroke();
  fill(0);
  //This is determing how high the square will float and how fast it will drop.
  move = move + grav; 
  y = y + move; 
  //This figures out the positioning of the square along with stating whether to move or not. 
  if (y + (sqr/2) >= (300)){
    y = (263)- (sqr/2);
    NotMoving = true;
  } else {
    NotMoving = false;
  }
}
//Here when the mouse is prossed the square jumps.
function mousePressed(){
  if (NotMoving){
    hobble();
  }
}

function hobble(){
  move = heightx;
}

function brutan() {
  push();
  noStroke();
  fill(0);
  
  //this dictates, on the press of a key, 
  if (enabler === 1) {
  b = b - 4;
    if (b < 0) {
      b = 700;
  }
}
function keyPressed() {
  loop();
  }

function keyReleased() {
  noLoop();
  }

}

function keyPressed() {
  enabler = 1; 
}










