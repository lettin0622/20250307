function setup() { //設定函數，初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    //畫布的顏色為F6F1D1(ca為十六進位的值，翻成十進位為250)
    background(246, 241, 209);
  }
  
  function draw() { //畫圖函數，畫圖的地方
    //畫布的顏色為F6F1D1(ca為十六進位的值，翻成十進位為250)
    background(246, 241, 209);
    //畫圓的顏色為#FFC6D9(FF為十六進位的值，翻成十進位為255)
    fill(255, 198, 217);
    //畫圓的邊框為#ED7B84(ED為十六進位的值，翻成十進位為237)
    stroke(237, 123, 132);
    //畫圓的邊框寬度為10
    strokeWeight(10);
    
    //在視窗的中間畫一個方框，以方框中心點為基準，方框的寬高為200
    rectMode(CENTER); //設定方框的模式為中心點
    rect(windowWidth/2, windowHeight/2, 200, 200); //畫方框
  
    //在視窗的中間畫一個圓，圓的寬高為200
    //圓的顏色為#DDFFF7(DD為十六進位的值，翻成十進位為221)
    fill(221, 255, 247);
    //圓的邊框為#028090(02為十六進位的值，翻成十進位為2)
    stroke(2, 128, 144);
    ellipse(width/2, height/2, 200, 200); //畫圓
  
  
  }
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }