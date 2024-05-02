let blue, purple, orange, bg_black, blue2;

function setup() {
  let canvas = createCanvas(1000, 500);
  // translate(0,50); // Shifts the canvas down
  canvas.parent('arrow-holder');
  noLoop();

  blue = color(95,178,255);
  orange = color(228,187,109);
  purple = color(208,144,218);
  bg_black = color(35,35,35);
  blue2 = color(142, 164, 240);

  textAlign(CENTER, CENTER);
  textSize(50);
}

function draw() {
  background(bg_black);
  translate(width / 2, height / 2);
  drawArrow();
  drawText();
}

function drawArrow() {
  push();
  translate(0, 0); // Translate to origin
  noStroke();

  // Draw rectangle body
  // fill(95,178,255);
  // Left to right gradient
  setGradient(-250, -40, 280, 80, orange, purple);
  rect(-250, -40, 350, 80); // x, y, width, height

  // Draw triangle head
  setGradient(31, -40, 70, 80, purple, blue);
  // fill(blue);
  // noStroke();
  // beginShape();
  // vertex(220, 0);
  // vertex(80, -80);
  // vertex(80, 80);
  // endShape(CLOSE);
  // pop();
  setTriangleGradient(240, 0, 80, -80, 80, 80, blue2, blue);
  pop();
}

function setGradient(x, y, w, h, c1, c2) {
  noFill();
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c, [90]);
      line(i, y, i, y + h);
    }
}

function setTriangleGradient(x1, y1, x2, y2, x3, y3, c1, c2) {
  noFill();

  // Triangle vertices
  let v1 = createVector(x1, y1);
  let v2 = createVector(x2, y2);
  let v3 = createVector(x3, y3);

  // Triangle edges
  let e1 = p5.Vector.sub(v2, v1);
  let e2 = p5.Vector.sub(v3, v2);
  let e3 = p5.Vector.sub(v1, v3);

  // Triangle edge lengths
  let len1 = e1.mag();
  let len2 = e2.mag();
  let len3 = e3.mag();

  // Draw gradient lines
  for (let i = 0; i <= len3; i++) {
    let inter = i / len3;
    let c = lerpColor(c1, c2, inter);
    stroke(c, [90]);
    let p1 = p5.Vector.add(v3, p5.Vector.mult(e3, inter));
    let p2 = p5.Vector.add(v1, p5.Vector.mult(e1, 1 - inter));
    line(p1.x, p1.y, p2.x, p2.y);
  }

  for (let i = 0; i <= len2; i++) {
    let inter = i / len2;
    let c = lerpColor(c2, c1, inter);
    stroke(c, [90]);
    let p1 = p5.Vector.add(v2, p5.Vector.mult(e2, inter));
    let p2 = p5.Vector.add(v1, p5.Vector.mult(e1, 1 - inter));
    line(p1.x, p1.y, p2.x, p2.y);
  }
}

function drawText() {
  push();
  noStroke();

  fill(orange);
  // Draw left most value
  textSize(40);
  text("33%", -300, -10);
  textSize(16);
  text("early", -300, 20);

  // Going clockwise
  textSize(40);
  text("39%", -190, -90);
  textSize(16);
  text("late", -190, -60);
  textSize(40);
  fill(purple);
  text("7,435", -40, -90);
  textSize(16);
  text("minutes moving", -40, -60);
  fill(blue);
  textSize(40);
  text("5070", 140, -115);
  textSize(16);
  text("minutes driving", 150, -75, 50);
  textSize(40);
  text("3986", 300, -20);
  textSize(16);
  text("miles traveled", 275, 20, 50);
  textSize(40);
  text("1930", 140, 110);
  textSize(16);
  text("miles flew", 140, 150, 50);
  textSize(40);
  fill(purple);
  text("16", -40, 75);
  textSize(16);
  text("days of no travel", -72, 115, 70);
  textSize(40);
  fill(orange);
  text("28%", -190, 75);
  textSize(16);
  text("punctual", -190, 105);

  pop();
}