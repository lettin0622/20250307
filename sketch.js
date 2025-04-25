function setup() { //設定函數，初始值的地方
  //建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  //設定顏色模式為HSB
  colorMode(HSB, 360, 100, 100);
  // 清除畫布
  background(0);
}

function draw() { //畫圖函數，畫圖的地方
  // 計算色相和亮度，根據滑鼠的位置
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);
  
  // 設定圓的顏色
  fill(hue, 100, brightness);
  noStroke();
  
  // 畫圓，圓的寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

//當視窗的大小改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // 清除畫布
  background(0);
}