var pumpkin;
var x=0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  pumpkin = loadImage("pics/pumpkin.jpg");
}

function draw() {
  // put drawing code here
 background('white');
  image(pumpkin, 0, 0);

  push();
   translate(x,50) ;
   x++ ;
   if (x > width-200) {
     x = -400;
   }
  bat();

  pop();
}

function mouseReleased() {
  console.log(mouseX + ", " + mouseY);
}
function bat(){  // bat
  fill(0);
  triangle(372, 108, 358, 76, 352, 114);
  triangle(329, 115, 310, 88, 315, 126);
  ellipse(346, 138, 70, 70);
  quad(356, 120, 397, 75, 435, 103, 359, 132);
  quad(330, 134, 258, 114, 267, 167, 338, 141);
  fill('red');
  ellipse(334, 128, 10, 10);
  ellipse(357, 126, 10, 10);}
