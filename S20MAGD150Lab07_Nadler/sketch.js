let rain1;
let rain2;
let rain3;
let rain4;
let rain5;
let rain6;
let rain7;
let rain8;
let rain9;
let rain10;
let cloud1;
let could2;
let could3;
let could4;
let could5;
let f = 200;
let k = 35;

function setup() {
  createCanvas(650, 550);
  //all of these are adding new rain or clouds in different locations
  rain1 = new Rain(15, 0);
  rain2 = new Rain(115, 0);
  rain3 = new Rain(165, 0);
  rain4 = new Rain(250, 0);
  rain5 = new Rain(250, 75);
  rain6 = new Rain(115, 75);
  rain7 = new Rain(0, 0);
  rain8 = new Rain(0, 75);
  rain9 = new Rain(-50, 0);
  rain10 = new Rain();
  cloud1 = new cloud(50, 25);
  cloud2 = new cloud(200, 25);
  cloud3 = new cloud(350, 25);
  cloud4 = new cloud(500, 25);
  cloud5 = new cloud(650, 25);
}

function draw(){
  background(125, 125, 175);
  fill(25, 175, 125);
  rectMode(CENTER);
  rect(325, 600, 800, 200);
    rain1.move();
  rain1.show();
    rain2.move();
  rain2.show();
    rain3.move();
  rain3.show();
    rain4.move();
  rain4.show();
    rain5.move();
  rain5.show();
    rain6.move();
  rain6.show();
  cloud1.appear();
  cloud2.appear();
  cloud3.appear();
  cloud4.appear();
  cloud5.appear();
}

class Rain { 
  constructor(x, y) {
  this.x = x;
  this.y = y;
  }
  
  move() { //moving the rain down
  this.x = this.x + random(0, 5);
  this.y = this.y + random(0, 5);
  }
  
  show() { //making the rain appear 
  stroke(25, 25, 175);
  strokeWeight(5);
  point(this.x, this.y);
  point(this.x + f, this.y + k);
  }
}

class cloud {
  constructor(a, b) {
  this.a = a;
  this.b = b;
  }
  
  appear() {//mkaing the cloud appear in the sky
  fill(175);
  noStroke();
  ellipseMode(CENTER);
    ellipse(this.a, this.b, 200, 170);
  }
}