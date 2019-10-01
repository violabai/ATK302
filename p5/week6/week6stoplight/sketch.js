var myState = 0;
var myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  fill('blue');
  rect(width / 2, height / 2, 150, 500);

  switch (myState) {
    case 0:
      fill('red');
      ellipse(width / 2, 250, 100, 100);
      myTimer++;
      if (myTimer >= 200) {
        myState ++;
        myTimer = 0;
      }
      fill('grey');
      ellipse(width / 2, height / 2, 100, 100);
      fill('grey');
      ellipse(width / 2, 550, 100, 100);

      break;

    case 1:
      fill('yellow');
      ellipse(width / 2, height / 2, 100, 100);
      myTimer++;
      if (myTimer >= 200) {
        myState++;
        myTimer = 0;
      }
      fill('grey');
      ellipse(width / 2, 250, 100, 100);
      fill('grey');
      ellipse(width / 2, 550, 100, 100);
      break;

    case 2:
      fill('green');
      ellipse(width / 2, 550, 100, 100);
      fill('grey');
      ellipse(width / 2, height / 2, 100, 100);
      fill('grey');
      ellipse(width / 2, 250, 100, 100);
      break;

}
}
