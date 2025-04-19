let circles = [];
let fish = [];
let lines = [
  [-3, 5], [3, 7], [1, 5], [2, 4], [4, 3], [5, 2], [6, 2], [8, 4], [8, -1], [6, 0],
  [0, -3], [2, -6], [-2, -3], [-4, -2], [-5, -1], [-6, 1], [-6, 2]
];

function setup() { //設定
  createCanvas(windowWidth, windowWidth); //建立畫布，畫布寬為400，高為400
  for (let i = 0; i < 5; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      dx: random(-2, 2),
      dy: random(-2, 2)
    });
  }
  for (let i = 0; i < 10; i++) {
    fish.push({
      x: random(width),
      y: random(height),
      dx: random(-2, 2),
      dy: random(-2, 2)
    });
  }
}

function draw() { //畫布
  background("#48cae4"); //背景色為灰色
  //畫一個有顏色的圓，框線為黃色，圓的顏色為紅色，框線粗細為5
  stroke("#386641"); //框線色為黃色
  strokeWeight(5); //框線粗細為5
  fill("#a7c957"); //填充色為紅色
  ellipse(200, 200, 200, 200); //畫一個圓，圓心為(100, 100)，半徑為25
  //在第一個圓的上方，左右兩邊各畫一個小圓
  ellipse(290, 90, 80, 80); //畫一個圓，圓心為(250, 300)，半徑為50
  ellipse(110, 90, 80, 80); //畫一個圓，圓心為(150, 300)，半徑為50
  // 在兩個圓ellipse(290, 90, 80, 80)與ellipse(110, 90, 80, 80)裡面，各加上一個白色小圓
  stroke("#f8f9fa"); //框線色為黃色
  strokeWeight(5); //框線粗細為5
  fill("#f8f9fa"); //填充色為紅色
  ellipse(290, 90, 40, 40); //畫一個圓，圓心為(250, 300)，半徑為25
  ellipse(110, 90, 40, 40); //畫一個圓，圓心為(150, 300)，半徑為25
  // 在兩個圓ellipse(290, 90, 40, 40)與ellipse(110, 90, 40, 40)裡面，各加上一個黑色小圓
  stroke("#03071e"); //框線色為黃色
  strokeWeight(5); //框線粗細為5
  fill("#03071e"); //填充色為紅色
  ellipse(290, 90, 20, 20); //畫一個圓，圓心為(250, 300)，半徑為25
  ellipse(110, 90, 20, 20); //畫一個圓，圓心為(150, 300)，半徑為25

  // Draw and move green circles
  fill("#a7c957");
  noStroke();
  for (let circle of circles) {
    ellipse(circle.x, circle.y, 20, 20);
    circle.x += circle.dx;
    circle.y += circle.dy;

    if (circle.x < 0 || circle.x > width) circle.dx *= -1;
    if (circle.y < 0 || circle.y > height) circle.dy *= -1;
  }

  // Draw and move fish
  fill("#ff6f61");
  for (let f of fish) {
    drawFish(f.x, f.y);
    f.x += f.dx;
    f.y += f.dy;

    if (f.x < 0 || f.x > width) f.dx *= -1;
    if (f.y < 0 || f.y > height) f.dy *= -1;
  }

  // Draw lines based on given coordinates and fill with color
  stroke("#03071e");
  strokeWeight(2);
  fill("#e85d04");
  beginShape();
  for (let point of lines) {
    vertex(point[0] * 50 + width / 2, -point[1] * 50 + height / 2);
  }
  endShape(CLOSE);
}

function drawFish(x, y) {
  ellipse(x, y, 30, 15); // body
  triangle(x - 15, y, x - 25, y - 5, x - 25, y + 5); // tail
}