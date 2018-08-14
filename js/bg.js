/**
const cvs = document.getElementById('bg');
const ctx = cvs.getContext('2d');
const box = 32;

// Load images
// add images | should audio be audio file?
/**
const groundImg = new Image();
groundImg.src = 'img/ground.png';
const foodImg = new Image();
foodImg.src = 'img/food.png';
*/

var radius = 0;
var color = 209;
var colorend = color - 100;
var light = 71;
var lightend = light + 20;

function draw() {
  var canvas = document.getElementById('bg');
  if (canvas.getContext) {
     var ctx = canvas.getContext('2d');
     ctx.beginPath();





  //  ctx.moveTo(110, 75);
    //ctx.lineWidth=10;
    //ctx.strokeStyle="#880000";
    //ctx.stroke();
    //ctx.fillStyle="#000088";

    radius += 0.025;
    if (radius < 2.5){
      ctx.arc(75, 75, radius, 0, Math.PI * 2, false); // Outer circle
      ctx.fillStyle = 'hsl(' + (colorend < color ? colorend+=1 : colorend = color) + ',100%,' + (light < lightend ? light+=0.2 : light = lightend) + '%)';
      ctx.fill();
      requestAnimationFrame(draw);
    }
    ctx.closePath();
    // CANVAS PROPERTIES

  }
}
var canvas2 = document.getElementById('bg');
var ctx2 = canvas2.getContext('2d');
ctx2.lineWidth = 1;
ctx2.strokeStyle = '#506EE5';


// CANVAS MATHS
var x = 75
    y = 75,
    radiusStroke = 6,
    circumStroke = Math.PI * 2,
    start = Math.PI / -2, // Start position (top)
    finish = 100, // Finish (in %)
    curr = 0; // Current position (in %)

// CANVAS ANIMATION

// Enables browser-decided smooth animation (60fps)
var raf =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
window.requestAnimationFrame = raf;

// Animate function
function animate(draw_to) {
  // Clear off the canvas
  ctx2.clearRect(300, 100, 20, 20);
  // Start over
  ctx2.beginPath();
  // arc(x, y, radius, startAngle, endAngle, anticlockwise)
  // Re-draw from the very beginning each time so there isn't tiny line spaces between each section (the browser paint rendering will probably be smoother too)
  ctx2.arc(x, y, radiusStroke, start, draw_to, false);
  // Draw
  ctx2.stroke();
  // Increment percent
  curr++;
  // Animate until end
  if (curr < finish + 1) {
    // Recursive repeat this function until the end is reached
    requestAnimationFrame(function () {
      animate(circumStroke * curr / 100 + start);
    });
  }
  ctx2.closePath();
}

animate();





// Animation adpated from: http://stackoverflow.com/questions/15692353/animate-a-canvas-circle-to-draw-on-load & http://jsfiddle.net/loktar/uhVj6/4/









/**



// creat snake
let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

// create food
let food = {
  x: Math.floor(Math.random() * 17 + 1) * box,
  y: Math.floor(Math.random() * 15 + 3) * box,
};


/**
 * snake collides with itself or border
 * @param {index} head index / head of snake.
 * @param {array} array entire snake.
 * @return {boolean} true or false.
 */
 /**
function collision(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}
// check for border collisions too


/**
 * draws canvas
 */
 /**
function draw() {

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = (i == 0) ? 'green' : 'white';
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
    ctx.strokeStyle = 'red';
    ctx.strokeRect(snake[i].x, snake[i].y, box, box);
  }

  ctx.drawImage(foodImg, food.x, food.y);

  // old head position
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  // eats food
  if (snakeX == food.x && snakeY == food.y) {
    score++;
    eatAud.play();
    food = {
      x: Math.floor(Math.random() * 17 + 1) * box,
      y: Math.floor(Math.random() * 15 + 3) * box,
    };
  } else {
    snake.pop();
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };


}
*/
