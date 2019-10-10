var myCar1; //declare it
var myCar2;
function setup() {
  createCanvas(800, 800);
  myCar1 = new Car(); //spawn 1 car
  myCar2 = new Car();
}

function draw() {
  // put drawing code here
  background(100);

  myCar1.display();
  myCar1.drive();

  myCar2.display();
  myCar2.drive();
}

function Car() {
  //attributes
  this.x = random(width);
  this.y = random(height);
  this.r = random(255) ;
  this.g = random(255) ;
  this.b = random(255) ;

  this.vel = createVector(random(-5, 5),random(-5, 5));
  this.pos = createVector(100, 100);

  this.display = function() {
    fill(this.r,this.g, this.b);
    rect(this.pos.x, this.pos.y, 100, 50);
}
  this.drive = function (){
    this.pos. add (this.vel);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.x > height) this.pos.y = 0;
      if (this.pos.x < 0 this.pos.y = height;
    }

}
