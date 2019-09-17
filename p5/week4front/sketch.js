var myFont;
var x = 0;

function preload(){
  myFont = loadFont('assets/Modak-Regular.ttf');

}
function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
 background('black')
  fill('#ED225D');
  textFont(myFont);
  textSize(36);
  text('HELLO WORLD',x,50);
  x = x + 1 ;
  if (x >width){
    x = 0 ;
  }

}
