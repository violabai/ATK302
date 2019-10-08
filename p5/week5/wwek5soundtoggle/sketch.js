var song1 ;
function preload() {
  song1 = loadSound('assets/5.mp3') ;
}


function setup() {
  // put setup code here
  createCanvas(500, 500);
}

function draw() {
}


function mouseReleased(){
  // song1.play();
  // if song is playing, pause it!
if(song1.isPlaying()){
  song1.pause ();}

  else{ 
    song1.play();
  }



}
//song1. pause()   song1.play() ; song1. isplaying();
