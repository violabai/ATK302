// var snowmanColor = color('#ffffff'); //snowmarn color
//画布样式
function setup() {
    createCanvas(1360, 600);
    background('#00D0FF');
}

function draw() {
    //   底部颜色
  noStroke();
    let footer_c = color('#008B00	');
    fill(footer_c);
    // noStroke();
    rect(0, 500, 1370, 100); //参数说明:  x轴0，y轴600-100，width:1300 , height:  100

    //身体
  // stroke("#000000");
  // strokeWeight(0.3);
    fill('#ffffff');
    ellipse(390, 410,330,270);
    var clickEL = ellipse(390, 210, 170,170);
    if(clickEL.mouseIsPressed){
      snow();
    }

//眼睛
  stroke("#000000");
  strokeWeight(2);
  fill('#000000');
  ellipse(370, 210, 20,20);
  ellipse(420, 210, 20,20);

  //纽扣
  stroke("#000000");
  strokeWeight(2);
  fill('#000000');
  ellipse(400, 360, 20,20);
  ellipse(400, 400, 20,20);
  ellipse(400, 440, 20,20);


  //鼻子
  noStroke();
  fill('#fda636');
  triangle(400,250,395,230,500,220);

// 帽子
  noStroke();
  fill('#f48048');
  rect(340, 110, 90, 39, 20,20,20,20);
  ellipse(386,108,60,60);
  fill('#e35457');
  ellipse(399,115,15,15);
  ellipse(380,115,10,10);
  fill('#f48048');
  rect(320, 256, 140, 32);
  rect(340, 269, 40, 100);
  fill('#f48048');
  rect(340, 309, 8, 80);
  rect(356, 309, 8, 80);
  rect(371, 309, 8, 80);

  //文字
  textSize(32);
  fill('#000000');
  var strArray = ['Snow','bobo','who','can','control','the','snow'];  //str数组
  var separator = ' ';   //
  var messsage = join(strArray,separator);   //数组转成str
  text(messsage, 569,250);   //参数1,2,3  1、要显示字串，其它的参数，以x軕和y轴进行调整(位置)

}


function snow() {
  //    1、定义一片雪花模板
  var flake = document.createElement('div');
  // 雪花字符 ❄❉❅❆✻✼❇❈❊✥✺
  flake.innerHTML = '❆';
  flake.style.cssText = 'position:absolute;color:#fff;';

  //获取页面的高度 相当于雪花下落结束时Y轴的位置
  var documentHieght = window.innerHeight;
  //获取页面的宽度，利用这个数来算出，雪花开始时left的值
  var documentWidth = window.innerWidth;

  //定义生成一片雪花的毫秒数
  var millisec = 100;
  //2、设置第一个定时器，周期性定时器，每隔一段时间（millisec）生成一片雪花；
  setInterval(function() { //页面加载之后，定时器就开始工作
    //随机生成雪花下落 开始 时left的值，相当于开始时X轴的位置
    var startLeft = Math.random() * documentWidth;

    //随机生成雪花下落 结束 时left的值，相当于结束时X轴的位置
    var endLeft = Math.random() * documentWidth;

    //随机生成雪花大小
    var flakeSize = 5 + 20 * Math.random();

    //随机生成雪花下落持续时间
    var durationTime = 4000 + 7000 * Math.random();

    //随机生成雪花下落 开始 时的透明度
    var startOpacity = 0.7 + 0.3 * Math.random();

    //随机生成雪花下落 结束 时的透明度
    var endOpacity = 0.2 + 0.2 * Math.random();

    //克隆一个雪花模板
    var cloneFlake = flake.cloneNode(true);

    //第一次修改样式，定义克隆出来的雪花的样式
    cloneFlake.style.cssText += `
                        left: ${startLeft}px;
                        opacity: ${startOpacity};
                        font-size:${flakeSize}px;
                        top:-25px;
                              transition:${durationTime}ms;
                      `;

    //拼接到页面中
    document.body.appendChild(cloneFlake);

    //设置第二个定时器，一次性定时器，
    //当第一个定时器生成雪花，并在页面上渲染出来后，修改雪花的样式，让雪花动起来；
    setTimeout(function() {
      //第二次修改样式
      cloneFlake.style.cssText += `
                                left: ${endLeft}px;
                                top:${documentHieght}px;
                                opacity:${endOpacity};
                            `;

      //4、设置第三个定时器，当雪花落下后，删除雪花。
      setTimeout(function() {
        cloneFlake.remove();
      }, durationTime);
    }, 0);

  }, millisec);
}



// function draw() {
//     if (mouseIsPressed) {
//         fill(0);
//     } else {
//         fill(255);
//     }
//     ellipse(mouseX, mouseY, 80, 80);
// }
