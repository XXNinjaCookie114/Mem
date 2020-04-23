var angle = 0.0;
var offset = 60;
var scalar = 70;
var speed = 0.05;
var angle2 = 0.0;
var offset2 =0;
var scalar2 = 2
var speed2 = 0.01;
var timer = 0;
function setup() {
createCanvas(600, 600);
  noLoop();
  background(0);
}

function draw() {
  
  timer += 1;
  
  ellipseMode(CENTER);
  push();
  noStroke();
  fill(232, 137, 72);
  ellipse(300, 300, 550, 550);
  fill(232, 12, 21);
  ellipse(300, 300, 450, 450);
  pop();
  
  push();
  translate(270, 270);//cheese
    if (keyIsPressed === true) {
    fill(255, 213, 79);
  } else {
    fill(255, 106, 1); }
  for (let j=0; j < 50; j++){
  for (let i=0; i < 25; i++){
    var a = offset2 + j+cos(angle2) * 8.25*i+scalar2;
    var b = offset2 + j+sin(angle2) * 8.25*i+scalar2;
    ellipse(a, b, 25, 25);
  angle2+= speed2;
  }
  }
 
  pop();

  push();
  translate(250, 250);//pepperoni
  var x = offset + cos(angle) * scalar;
  var y = offset + sin(angle) * scalar;
  fill(235, 25, 25);
  ellipse(x, y, 75, 75);
  ellipse(x+60, y+60, 75, 75);
  if (timer >= 25){
    ellipse(x-75, y-90, 75, 75);
    ellipse(x-125, y, 75, 75);
    ellipse(x+90, y-25, 75, 75);
  }
  angle += speed;
}

function mousePressed(){
   
  loop();
 
}
function mouseReleased() {
  noLoop();
  pop();
}
