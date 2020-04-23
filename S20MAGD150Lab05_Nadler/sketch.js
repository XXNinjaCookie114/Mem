let halo;
var x = 750;
var y = 70;
var z = 60;
var angle = 5.0;
var offset = 350;
var scalar = 150;
var speed = 0.01;
var radius = 40;
var u = 120;
var reed = 2;
var direction = 1;
var r, g, b;
var d;
let inabler;
function setup() {
  createCanvas(850, 550);
  halo = createButton('Press Me!');
    halo.position(715, 475);
      halo.mousePressed(changeBG);
  background(20);
  fill(75);
  rect(675, 25, 150, 500, 15);
  frameRate(120);
  r = 70;
  g = 70;
  b = 70;
  inabler = 0;
}

function changeBG() {
  
  let bell = random(255);
  
  push();
  fill(55, 150, bell);
  rect(50, 25, 600, 500, 25);
  pop();
}

function draw() {
  let s = 'Me Next!';
  fill(255);
  textSize(15);
  text(s, 723, 105, 70, 80);
  
  d = dist(mouseX, mouseY, x, y);

    //if the mouse is over the circle
    if (d < radius) {
        //turn the fill on for 'mouse over' effect
        stroke(r, g, b);
        fill(0);        
        // console.log("over");
    } 
    else{ //if it isn't over the circle
      //set the fill to (r,g,b) for 'mouse over' effect
      fill(r, g, b);
    }

    //draw the rectangle button over the mouse trail
    ellipse(x, y, z, z);
  
  if (inabler === 1) {
     u += reed * direction;
  if ((u > 660-radius) || (u < 120-radius)) {
    direction = -direction;
  }
  
  if (direction == 1) {  
  
  stroke(255, 100);
  strokeWeight(2);
  fill(45, 125, 100);
  ellipse(u, radius, 25, 25);
  } else {
  stroke(255, 100);
  strokeWeight(2);
  fill(45, 250, 100);
  ellipse(u, radius, 25, 25);
    
  }
  
  var j = offset + cos(angle) * scalar;
  var i = offset + sin(angle) * scalar; 
  fill(150, 175, 0);
  ellipse(i, j, 40, 40);
  angle += speed; 
  } 

}
function mousePressed(){
  if (d < z) {
  inabler = 1;
  }
}