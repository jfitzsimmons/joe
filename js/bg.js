let circles = [];
let color;
let count = 0;
let canvas2 = document.getElementById('bg2');
let ctx2 = canvas2.getContext('2d');
const colors = [209, 291, 263];
const strokeColors = ['#506EE5', '#68B2F8', '#7037CD'];
const canvas = {
  element: document.getElementById('bg'),
  width: window.innerWidth,
  height: window.innerHeight,
  initialize: function() {
    circles = [];
    count = 0;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.element.style.width = `${window.innerWidth}px`;
    this.element.style.height = `${window.innerHeight}px`;
    ctx2.canvas.width = window.innerWidth;
    ctx2.canvas.height = window.innerHeight;
    ctx2.canvas.style.width = window.innerWidth;
    ctx2.canvas.style.height = window.innerHeight;
    document.body.appendChild(this.element);
  },
};

const requestAnimationFrame = window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;

let Circle = {
  create: function(dx, dy, xform) {
    let newCirc = Object.create(this);
    newCirc.radius = 0;
    newCirc.randomRad = xform[0];
    newCirc.radiusStroke = xform[0] + 3;
    newCirc.x = rndmRng((canvas.width - 30), 30);
    newCirc.y = rndmRng((canvas.height - 30), 30);
    newCirc.curr = 0;
    newCirc.strokeStyle = rndmArrI(strokeColors);
    newCirc.light = rndmRng(60, 10);
    newCirc.start = Math.random() * Math.PI * 2; // Start position (top)
    newCirc.speed = rndmRng(10, 2);
    newCirc.xform = xform;
    newCirc.dx = (Math.cos(newCirc.start) / newCirc.speed);
    newCirc.dy = (Math.sin(newCirc.start) / newCirc.speed);
    newCirc.element = document.createElement('div');
    newCirc.element.style.backgroundColor = `hsl(${xform[2]},100%,
      ${xform[1]}%)`;
    newCirc.element.style.width = `${newCirc.radius}px`;
    newCirc.element.style.height = `${newCirc.radius}px`;
    newCirc.element.className += 'circle';
    newCirc.width = parseInt(newCirc.element.style.width);
    newCirc.height = parseInt(newCirc.element.style.height);
    canvas.element.appendChild(newCirc.element);
    return newCirc;
  },
  draw: function(c) {
    c.element.style.left = `${c.x}px`;
    c.element.style.top = `${c.y}px`;
    if (c.radius < c.randomRad && typeof c.radius !== 'undefined') {
      c.radius += (c.randomRad / 80);
      c.element.style.width = c.radius + 'px';
      c.element.style.height = c.radius + 'px';
      c.element.style.backgroundColor = `hsl(${(c.xform[2] += .3)},
        100%,${(c.xform[1] += .3)}%)`;
      setTimeout(function() {
        c.draw(c);
      }, rndmRng(30, 15));
    } else {
      ctx2.lineWidth = 2;
      ctx2.strokeStyle = c.strokeStyle;
      c.addStroke(c);
    }
  },
  addStroke: function(c, drawTo) {
    ctx2.beginPath();
    ctx2.arc(c.x + (c.radius / 2), c.y + (c.radius / 2),
      (c.radius / 2) + 4, c.start, drawTo, false);
    ctx2.stroke();
    c.curr += 1.7;
    if (c.curr < 101) {
      requestAnimationFrame(function() {
        c.addStroke(c, (Math.PI * 2) * c.curr / 100 + c.start);
      });
    } else {
      // TODO: delete circBlock
      let circBlock = c.radiusStroke * 3.3;
      ctx2.clearRect((c.x - (circBlock / 2)), (c.y - (circBlock / 2)),
        circBlock, circBlock);
      c.x -= 3;
      c.y -= 3;
      c.move(c);
      newCircle();
    }
  },
  move: function(c) {
    c.element.style.boxShadow = `0 0 0 3px ${c.strokeStyle}`;
    c.element.style.border = '3px solid #1D0C20';
    if (c.x > (canvas.width - (c.randomRad + 10)) || c.x < 0) {
      c.dx = -c.dx;
    }
    if (c.y > (canvas.height - (c.randomRad + 10)) || c.y < 0) {
      c.dy = -c.dy;
    }
    c.x -= c.dx;
    c.y -= c.dy;
    c.element.style.left = `${c.x}px`;
    c.element.style.top = `${c.y}px`;
    requestAnimationFrame(() => this.move(c));
  },
};
const circleInit = (c) => c.draw(c);
const rndmRngArr = (r, l, c) => [r, l, c];
const rndmRng = (h, l) => Math.random() * (h - l) + l;
const rndmArrI = (a) => a[Math.floor(Math.random() * a.length)];

function newCircle() {
  color = rndmArrI(colors);
  if (circles.length < 30) {
    circles.push(Circle.create(rndmRng(2, -2), rndmRng(2, -2),
      rndmRngArr(rndmRng(25, 8), rndmRng(60, 10), rndmRng(color, color - 60))));
    circleInit(circles[count]);
    count++;
  }
}

let resizeId;
window.onresize = function() {
  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 500);
};

function doneResizing() {
  let selectTag = document.getElementsByClassName('circle');
  while (selectTag[0]) {
    selectTag[0].parentNode.removeChild(selectTag[0]);
  }
  canvas.initialize();
}

canvas.initialize();
newCircle();
