var x = 0 ;

function setup() {
  // put setup code here
  createCanvas(200, 200);
}

function draw() {
  // put drawing code here
  background(100);

text("DouDou" , x , 40);
x += 5;
if (x > 200 ){
  x = 0 ;
}
}
