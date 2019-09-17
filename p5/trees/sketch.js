function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
}

function draw(){
  background('#fae');
  noStroke();

  fill(300);
  ellipse(200, 100, 72, 72);


  fill('rgba(0,255,0, 0.25)');
  triangle(300, 18, 180, 360, 300, 360);

  fill(255);
  text(mouseX + ',' + mouseY ,30,30);
}
function mouseReleased(){
  console, log(mouseX + ',' + mouseY);
}
