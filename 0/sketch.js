


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill(0);
}

function draw() {
  background(255);
  rect(200,200,200,200);
  
}

function mouseClicked(){
fill(
random(100,200),
0,
0
);
rect(mouseX,mouseY,80,80);

}

function mouseMoved(){
stroke(0);
line(0,0,mouseX,mouseY);

}