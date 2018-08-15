var radius = 0;
var strokeColors = ['#506EE5','#68B2F8','7037CD'];
var colors = [209,291,263];

var canvas = document.getElementById('bg');
var ctx = canvas.getContext('2d');
var circles = [];
var requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.lineWidth = 1;



var circumStroke = Math.PI * 2;
var start = Math.PI / -2; // Start position (top)
var finish = 100; // Finish (in %)



function Circle() {
  radius = 0;
  var randomRad = Math.random() * (5 - 2.5) + 2.5;
  var radiusStroke = randomRad + 3.5;
  var x = Math.random() * (ctx.canvas.width);
  var y = Math.random() * (ctx.canvas.height);
  curr = 0;
  var color = colors[Math.floor(Math.random()*colors.length)];
  ctx.strokeStyle = strokeColors[Math.floor(Math.random()*strokeColors.length)];
  var colorStart = Math.floor(Math.random() * (120 - 80) + 80);
  var light = Math.floor(Math.random() * (60 - 40) + 40);
  var lightend = light + Math.floor(Math.random() * (45 - 25) + 25);

  function draw() {
    ctx.beginPath();
    radius += (randomRad / 100);
    if (radius < randomRad) {
      ctx.arc(x, y, radius, 0, Math.PI * 2, false); // inner circle
      ctx.fillStyle = 'hsl(' + (colorStart < color ? colorStart += 1 : colorStart = color) + ',100%,' + (light < lightend ? light += 0.2 : light = lightend) + '%)';
      ctx.fill();
      requestAnimationFrame(draw);
    } else {
      newCircle();
    }
  }

  function animate(draw_to) {
    ctx.beginPath();
    ctx.arc(x, y, radiusStroke, start, draw_to, false);
    ctx.stroke();
    // Increment percent
    curr++;
    // Animate until end
    if (curr < finish + 1) {
      // Recursive repeat this function until the end is reached
      requestAnimationFrame(function() {
        animate(circumStroke * curr / 100 + start);
      });
    }
  }
  draw();
  animate();
}

function newCircle() {
  console.log('new circle call (Circles.legnth) ' + circles.length);
  if (circles.length < 40) {
    var circle = new Circle();
    circles.push(circle);
    console.log('new circle call if stat < 20');
  }
}
newCircle();
