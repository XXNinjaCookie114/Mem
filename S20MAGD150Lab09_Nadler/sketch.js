let sword;
let song;
let face;
let light;

function preload() {
song = loadSound("sword-swish.mp3"); 
//https://freesound.org/people/Taira%20Komori/sounds/215028/
}

function setup() {
  createCanvas(500, 500);
  song.play();
      sword = new Sword();
        face = new Face();
  light = new Light();
}

function draw() {
  background(125);
  //if (song.currentTime() > 0.1 < .1) {
  sword.show();
  face.show2();
  light.show3();
  light.move();
  //}
}

class Sword {//This is the base sword set to the middle of the page so it is even.
  constructor(){
    this.x = width/2;
      this.y = height/2;
  }
  show() {
    push();
  rectMode(CENTER);
    fill(225);
      rect(this.x, this.y, 200, 505);
        //rectMode(CORNERS);
        translate(-57, 0);
        rect(this.x, this.y, 110, 505);
    pop();
  }
}

class Face{ //this is showing the evil eye reflecting on the sword
  constructor(){
  this.w = 275;
    this.z = 250;
  }
  
  show2() {
    push();
    fill(0, 175);
    translate(width/2,height/2);
      beginShape();
        vertex(-80,0);
          bezierVertex(-30,-50,30,-50,80,0);
            bezierVertex(30,50,-30,50,-80,0)
              endShape();
                fill(125, 25, 25, 125);
                ellipse(0,0,50,50);
                  fill(0, 125);
                  ellipse(0,0,30,30);
    pop();
    
  }
}

class Light {
constructor() {
this.a = 138;
this.b = 0;
}
  
  show3 () {
    push();
    noStroke();
    fill(255, 200);
  beginShape();
    vertex(this.a, this.b);
    vertex(this.a + 212, this.b + 10);
    vertex(this.a + 212, this.b + 60);
    vertex(this.a, this.b + 50);
  endShape();
    pop();  
  }
move (){
  this.b = this.b + 25;
  }
}