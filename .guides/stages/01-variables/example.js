/**
* JS Examples
* User: fmay
* Date: 2014-08-24
* Time: 10:20 AM
*/

function drawCircle() {
    
  // Create a canvas x=50 and y=10, 400 side and 300 high
  var width=400;
  var height=300;
  var circleColor="#fff000";  
  
  // Create a drawing area (canvas) at the screen coordinate (100,50)
  var paper = Raphael(100, 50, width, height);
  
  // Draw a rectangle that fills the entire rectangle
  var rect = paper.rect(0, 0, width, height);
  
  // Fill it with a color
  rect.attr("fill", "#f00");
  
  // Creates circle at x = 100, y = 50, with radius=30
  var circle = paper.circle(100, 50, 30);

    
  // Sets the fill attribute of the circle
  circle.attr("fill", circleColor);

  // Sets the stroke (border) attribute of the circle to black
  circle.attr("stroke", "#000000");    
  
};

function playSound() {
  
  var freq1=480;
  const duration=1000;
  
  var sine1 = T("sin", {freq:freq1, mul:0.5});
  var sine2 = T("sin", {freq:660, mul:0.5});

  T("perc", {r:duration}, sine1, sine2).on("ended", function() {
    this.pause();
  }).bang().play();  

}