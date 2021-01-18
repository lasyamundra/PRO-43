var hr, mn, sc;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  translate(200,200);
  rotate(-90);

  hr = hour();
  hrAngle = map(hr%12,0,12,0,360);
  noFill();
  stroke(0,0,255);
  strokeWeight(10);
  arc(0,0,260,260,0,hrAngle);

  mn = minute();
  mnAngle = map(mn,0,60,0,360);
  stroke(0,255,0);
  strokeWeight(10);
  arc(0,0,280,280,0,mnAngle);

  sc = second();
  scAngle = map(sc,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(10);
  arc(0,0,300,300,0,scAngle);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0);
  pop()

  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0);
  pop()
}
