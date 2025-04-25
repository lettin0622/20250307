function setup() { //設定函數，初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    //畫布的顏色為F6F1D1(ca為十六進位的值，翻成十進位為250)
    background(246, 241, 209);
  }
  
  function draw() { //畫圖函數，畫圖的地方
    //畫布的顏色為F6F1D1(ca為十六進位的值，翻成十進位為250)
    background(246, 241, 209);
    
    //計算方框和圓的大小，根據滑鼠的X位置
    let size = map(mouseX, 0, windowWidth, 100, 500);
    
    //設定方框的模式為中心點
    rectMode(CENTER); 
    
    //設定每個方框和圓之間的間距
    let spacing = size + 20;
    
    //計算一排可以放多少個方框和圓
    let count = floor(windowWidth / spacing);
    
    for (let i = 0; i < count; i++) {
      let x = i * spacing + spacing / 2;
      let y = windowHeight / 2;
      
      //畫方框
      fill(255, 198, 217);
      stroke(237, 123, 132);
      strokeWeight(10);
      rect(x, y, size, size);
      
      //畫圓
      fill(221, 255, 247);
      stroke(2, 128, 144);
      ellipse(x, y, size, size);
    }
  }
  
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }