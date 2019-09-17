var peach;

function preload() {
  peach =loadSound("assets/peach.mp3");// put setup code here

}
function setup(){

  creatCanvas(720,200);
  background(225,0,0);
  peach.play();
}

function draw() {
  // put drawing code here

}
function mouseReleased(){
    peach.stop();
}
