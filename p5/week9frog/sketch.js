var cars = [];
var frogPos;
var timer = 0;
var myState = 0;
var yoda, yodaright, yodaleft;
var bird;
var birds = [];

function setup() {

  createCanvas(800, 800);
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
  yodaleft = loadImage("assets/yodaLeft.gif");
  yodaright = loadImage("assets/yodaRight.gif");
  yoda = yodaleft

  bird = loadImage("assets/bird1.png");
  birds[0] = loadImage("assets/bird1.png")
  birds[1] = loadImage("assets/bird2.png")
  birds[2] = loadImage("assets/bird3.png")

  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  background(100);
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  // draw the frog
  fill('green');
  image(yoda, frogPos.x, frogPos.y);
  checkForKeys();
}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.birdNum = floor(random(birds,length-1));
  this.timer = 0 ;

  // methods
  this.display = function() {
    image(birds[this.birdNum], this.pos.x, this.pos.y, 100, 100);

    this.timer++;
    if (this.timer > 20){
    this.birdNum = this.birdNum + 1;
    this.timer = 0;
    }
    if (this.birdNum > birds.length - 1) {
      this.birdNum = 0;
    }
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaleft;
  if (keyCode === RIGHT_ARROW) yoda = yodaright;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}
