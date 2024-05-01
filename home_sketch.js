let arrowX, arrowY;
let arrowWidth = 200;
let arrowHeight = 100;
let arrowColor = [255, 0, 0]; // Initial color is red

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("sketch");
    frameRate(60);
  arrowX = width / 2;
  arrowY = height / 2;
  noStroke();
}

function draw() {
  background(220);
  drawArrow(arrowX, arrowY, arrowWidth, arrowHeight, arrowColor);
}

function drawArrow(x, y, w, h, color) {
    push();
    translate(x, y);
    fill(color);

    // Draw the rectangle
    rect(-w / 2, -h / 4, w - h, h / 2);

    // Draw the triangle
    beginShape();
    vertex(w / 2, 0);
    vertex(w / 2 - h, h);
    vertex(w / 2 - h, -h);
    endShape(CLOSE);

    pop();
  }

function mousePressed() {
  // Change arrow color on mouse click
  arrowColor = [random(255), random(255), random(255)];
}