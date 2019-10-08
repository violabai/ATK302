var = myCar1 ; //declare it

function setup() {
  createCanvas(800, 800);
  myCar1 = new Car() ; //spawn 1 car
}

function draw() {
  // put drawing code here
background(100);
myCar1.display();
}
function Car(){
  //attributes
this.x = 100 ;

  //methods
this.display = function(){
  rect(this.x, 100, 100, 50) ;
}
}
