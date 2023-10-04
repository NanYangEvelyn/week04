


function setup() {
  createCanvas(windowWidth, windowHeight);
  fill('pink');
  print(millis());
}

function draw() {
  background(255);
let secondNow = second();
let myDiameter = map(secondNow,0,59,100,height);
ellipse(width / 2,height / 2, myDiameter,myDiameter);
}