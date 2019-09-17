var = myState ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
switch(myState){
  case 0:
  background (255, 0 ,0);
  text( "case0", 100, 100);
  break;

  case 1;
  background (0, 255 ,0);
  text( "case1", 100, 100);
  break;

  case 2;
  background (0, 0 ,255);
  text( "case2", 100, 100);
  break;
}
}
 function mouseReleased(
 ){
  myState++ ;
  if (myState > 2){
    myState = 0 ;
  }
  myState = (myState + 1) % 3 ;
 }
