var timer = 200 ;  // declare in the global area
function setup() {
  // put setup code here
  createCanvas(800, 800);
  background('black');
}

function draw() {
  // put drawing code here
timer--;
if (timer <= 0){
  background(random(255),random(255),random(255));
}
}
