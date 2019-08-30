function setup() {
  createCanvas(100, 100, WEBGL);
  noStroke();
  fill(255, 102, 204);
}

function draw() {
  background('rgb(0,255,0)');
  pointLight(color(255), createVector(sin(millis() / 1000) * 20, -40, -10));
  scale(0.75);
  sphere();
}
