var myState = 0;
var myTimer = 0;
function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('blue');
      text("有一只公鹿 他走着走着 越走越快", 100, 100);
      fill('black');
      if (myTimer >=200){
        myState = 1;
        myTimer = 0;
      }
      break;

    case 1:
      background('yellow');
      text("最后他变成了高速公路", 100, 100);
      fill('black');
      break;
  }
}

  
