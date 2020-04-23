function setup() {
  createCanvas(650, 500);
  int(x = 350);
  int(a = 1);
  int(c = 1);
  frameRate(120);
  noiseScale=0.04;
}

function draw() {
  print(frameCount);
  background(75);
  let z=random(255);
  print(mouseX, mouseY);

  strokeWeight(.25);
  fill(0, 45, z);
  ellipse(375, x, 25, 25);
  ellipse(275, x, 25, 25);
  ellipse(width/2, x, 25, 25);
  ellipse(175, x, 25, 25);
  ellipse(75, x, 25, 25);
  ellipse(475, x, 25, 25);
   x = x - a;
  if (x > 475) {
    a = 0;
  }
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    noiseDetail(10, .65);
    stroke(noiseVal*0, 45, 245);
    line(x, mouseY+noiseVal*100, x, width);
    noiseDetail(5, .25);

  }
  let mgl = '25';
let k = float(mgl);
ellipse(480, 246, k, k);
  ellipse(120, 246, k, k);
  ellipse(450, 350, k, k);
  ellipse(150, 350, k, k);
  
}