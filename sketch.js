var img;
var capture;
var m;

function setup() {
  createCanvas(640,480);
  capture = createCapture(VIDEO);
  capture.size(300,300);
  
}
 
function draw() {
  background(255);
  m=0;
  if (key == 'a'){m=150};
  img=createImage(640+(mouseX/30)-(mouseY/30+m),480);
  img.loadPixels();
  capture.loadPixels();
  
   for (var x = 0; x < capture.width; x ++ ) {
    for (var y = 0; y < capture.height; y ++ ) {
  var i=(x+y*capture.width)*4;
   
      var r = capture.pixels[i];  
      var g = capture.pixels[i+ 1];
      var b = capture.pixels[i+ 2]; 
      var a = capture.pixels[i+ 3];
      
      img.pixels[i] = b-(mouseX/10);
    img.pixels[i + 1] = r-(mouseY/10);
    img.pixels[i + 2] = g+(mouseX/10);
    img.pixels[i + 3] = a;
  }
 }

  img.updatePixels();
  image(img,0,0);
  filter('INVERT');
}