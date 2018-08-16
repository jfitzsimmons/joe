
var strokeColors = ['#506EE5', '#68B2F8', '#7037CD'];
var colors = [209, 291, 263];
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
//var dx = 2;
//var dy = -2;
var circumStroke = Math.PI * 2;
var finish = 100; // Finish (in %)


function Circle() {
  radius = 0;
  var randomRad = Math.random() * (5 - 2.5) + 2.5;
  var radiusStroke = randomRad + 3.5;
  var x = Math.random() * (ctx.canvas.width);
  var y = Math.random() * (ctx.canvas.height);
  var curr = 0;
  var color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = strokeColors[Math.floor(Math.random() * strokeColors.length)];
  ctx.shadowColor=ctx.strokeStyle;
  var colorStart = Math.floor(Math.random() * (color  - (color-50)) + (color-50));
  var light = Math.floor(Math.random() * (60 - 10) + 10);
  var start = Math.random() * Math.PI * 2; // Start position (top)
  let speed = Math.floor(Math.random() * (5 - 2) + 2);







  function draw() {
    radius += (randomRad / 100);
    if (radius < randomRad) {
      //ctx.globalAlpha=0.1;
      //let colorEnd = (colorStart < color ? colorStart += 1 : colorStart = color);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2, false); // inner circle
      ctx.fillStyle = 'hsl(' + (colorStart += 0.25) + ',100%,' + (light += 0.25) + '%)';
      ctx.fill();
      //console.log('color: ' + color + ' colorStart: ' + colorStart + ' light: ' + light );
      requestAnimationFrame(draw);

    } else {

      console.log('draw else');
      console.log('stroke: ' + ctx.strokeStyle);
      animate();
newCircle();
    }
  }

  function animate(draw_to) {
    ctx.beginPath();
    ctx.arc(x, y, radiusStroke, start, draw_to, false);
    ctx.stroke();
//
    // Increment percent
    curr++;
    // Animate until end
    if (curr < finish + 1) {
      // Recursive repeat this function until the end is reached
      requestAnimationFrame(function() {
        animate(circumStroke * curr / 100 + start);
      });

    } else {
      console.log('animate else');
      ctx.lineWidth = 2;
      preMove();
      //circles.pop();
    }
  }

  function preMove() {
    let circBlock = radiusStroke*3.3;
    ctx.clearRect((x - (circBlock/2)),(y - (circBlock/2)),circBlock,circBlock);
    ctx.beginPath();
    ctx.arc(x, y, radiusStroke-2, 0, Math.PI * 2, false); // inner circle
    ctx.shadowBlur=6;

    ctx.shadowOffsetX=0;
    ctx.shadowOffsetY=0;
    ctx.fillStyle = 'hsl(' + colorStart + ',100%,' + light + '%)';
    ctx.fill();

    ctx.strokeStyle="#1D0C20";
    ctx.stroke();


    let angle = start;

    //direction = vector(cos(angle), sin(angle))

    //xPosition += (speed * direction.x)
    //yPosition += (speed * direction.y)

    x -=  (Math.cos(start)/speed);
    y -=  (Math.sin(start)/speed);



    //x += 0.3;
    requestAnimationFrame(preMove);
  }

  function move() {
    console.log('move begin x: ' + x);
    let direction = 1;
     //Random speed between 0 and 20
    //  ctx.beginPath();
    //ctx.globalAlpha = 0.3;

    //  xc = x-30;
    //  yc = y+10;
x = x++;


    requestAnimationFrame(move);
    //ctx.clearRect(xc, yc, 20, 20);
  }
  draw();

}

function newCircle() {
  //console.log('new circle call (Circles.legnth) ' + circles.length);
  if (circles.length < 40) {
    var circle = new Circle();
    circles.push(circle);
    //  console.log('new circle call if stat < 20');
  }
}
newCircle();
