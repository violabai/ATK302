var mySate = 0 ;  // declare in the global area
var myTimer = 0;

function setup(){
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
switch (myState){
  case 0:
  background(255,0,0);
  text("case 0",100,100);
  if (myTimer >= 200){
    myState = 1;
    myTimer = 0;
  }
  break;

  case 1:
  background(0,255,0);
  text("case 1",100,100);
  if (myTimer >= 200){
    myState = 2;
    myTimer = 0;
  }
  break;

  case 2:
  background(0,0,255);
  text("case 2",100,100);
  if (myTimer >= 200){
    myState = 0;
    myTimer = 0;
  }
  break;
}
}
