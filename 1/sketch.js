


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  fill('pink');
}

let xpos = 0;
let xVelocity = 10;
function draw() {
  background(255);
  
ellipse(xpos,50,50,50);
// if(xpos < width){
  xpos = xpos + xVelocity;
// }

if(xpos > width){
  xVelocity = -10;
}
if(xpos < 0){
  xVelocity = 10;
}
}