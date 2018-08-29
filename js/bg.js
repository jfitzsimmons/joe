let circles = [];
let color;
let count = 0;
let canvas2 = document.getElementById('bg2');
let ctx2 = canvas2.getContext('2d');
const movement = ['rotate', 'move', 'move2', 'rotate'];
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
  create: function(count, ani, dx, dy, xform) {
    let newCirc = Object.create(this);
    newCirc.id = count;
    newCirc.ani = ani;
    newCirc.radius = 0;
    newCirc.randomRad = xform[0];
    newCirc.radiusStroke = xform[0] + 3;
    newCirc.x = rndmRng((canvas.width - 30), 30);
    newCirc.y = rndmRng((canvas.height - 30), 30);
    newCirc.curr = 0;
    newCirc.strokeStyle = rndmArrI(strokeColors);
    newCirc.light = rndmRng(60, 10);
    newCirc.start = Math.random() * Math.PI * 2;
    newCirc.speed = rndmRng(8, 1);
    newCirc.xform = xform;
    newCirc.dx = (Math.cos(newCirc.start) / newCirc.speed);
    newCirc.dy = (Math.sin(newCirc.start) / newCirc.speed);
    newCirc.element = document.createElement('div');
    newCirc.element.style.backgroundColor = `hsl(${xform[2]},100%,
      ${xform[1]}%)`;
    newCirc.element.style.width = `${newCirc.radius}px`;
    newCirc.element.style.height = `${newCirc.radius}px`;
    newCirc.element.classList.add('circle');
    newCirc.element.style.left = `${newCirc.x}px`;
    newCirc.element.style.top = `${newCirc.y}px`;
    canvas.element.appendChild(newCirc.element);
    return newCirc;
  },
  draw: function(c) {
    if (c.radius < c.randomRad && typeof c.radius !== 'undefined') {
      c.radius += (c.randomRad / 80);
      c.element.style.width = c.radius + 'px';
      c.element.style.height = c.radius + 'px';
      c.element.style.backgroundColor = `hsl(${(c.xform[2] += .3)},
        100%,${(c.xform[1] += .3)}%)`;
      requestAnimationFrame(() => this.draw(c));
    } else {
      ctx2.lineWidth = 2;
      ctx2.strokeStyle = c.strokeStyle;
      c.setStart(c);
    }
  },
  setStart: function(c) {
    if (c.ani === 'rotate') {
      if (c.x > (canvas.width / 2)) {
        c.start = 4.7;
      } else {
        c.start = 1.6;
      }
    } else if (c.ani === 'move2') {
      if (c.x > (canvas.width / 2) && c.y > (canvas.height / 2)) {
        c.start = 0.9;
      } else if (c.x < (canvas.width / 2) && c.y > (canvas.height / 2)) {
        c.start = 2.5;
      } else if (c.x < (canvas.width / 2) && c.y < (canvas.height / 2)) {
        c.start = 3.8;
      } else {
        c.start = 5.6;
      }
    }
    c.addStroke(c);
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
      let circBlock = c.radiusStroke * 3.3;
      ctx2.clearRect((c.x - (circBlock / 2)), (c.y - (circBlock / 2)),
        circBlock, circBlock);
      c.x -= 3;
      c.y -= 3;
      c.element.style.boxShadow = `0 0 0 3px ${c.strokeStyle}`;
      c.element.style.border = '3px solid #1D0C20';
      (c.ani === 'rotate' && c.rotate(c));
      (c.ani === 'move' && c.move(c));
      (c.ani === 'move2' && c.move2(c));
      newCircle();
    }
  },
  move2: function(c) {
    if (c.x > (canvas.width / 2) && c.y > (canvas.height / 2)) {
      c.element.style.animation = `moveL ${rndmRng(350, 30)}s linear 0s infinite
       alternate, moveU ${rndmRng(350, 30)}s linear 0s infinite alternate`;
    } else if (c.x < (canvas.width / 2) && c.y > (canvas.height / 2)) {
      c.element.style.animation = `moveR ${rndmRng(350, 30)}s linear 0s infinite
       alternate, moveU ${rndmRng(350, 30)}s linear 0s infinite alternate`;
    } else if (c.x < (canvas.width / 2) && c.y < (canvas.height / 2)) {
      c.element.style.animation = `moveR ${rndmRng(350, 30)}s linear 0s infinite
       alternate, moveD ${rndmRng(350, 30)}s linear 0s infinite alternate`;
    } else {
      c.element.style.animation = `moveL ${rndmRng(350, 30)}s linear 0s infinite
       alternate, moveD ${rndmRng(350, 30)}s linear 0s infinite alternate`;
    }
    c.element.classList.add('circle-2');
  },
  move: function(c) {
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
  rotate: function(c) {
    let orbit = (1000 / (Math.abs(c.y - (canvas.height / 2)) + 100) * 150);
    if (c.x > (canvas.width / 2)) {
      c.element.style.transformOrigin = `-${orbit}% center`;
    } else {
      c.element.style.transformOrigin = `${orbit}% center`;
    }
    c.element.classList.add('circle-2');
  },
};
const circleInit = (c) => c.draw(c);
const rndmRngArr = (r, l, c) => [r, l, c];
const rndmRng = (h, l) => Math.random() * (h - l) + l;
const rndmArrI = (a) => a[Math.floor(Math.random() * a.length)];

function newCircle() {
  color = rndmArrI(colors);
  if (circles.length < 22) {
    circles.push(Circle.create(count, rndmArrI(movement), rndmRng(2, -2),
      rndmRng(2, -2), rndmRngArr(rndmRng(25, 8), rndmRng(60, 10),
      rndmRng(color, color - 60))));
    circleInit(circles[count]);
    count++;
  }
}

window.onresize = function() {
  let resizeId;
  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 500);
};

function doneResizing() {
  let selectTag = document.getElementsByClassName('circle');
  while (selectTag[0]) {
    selectTag[0].parentNode.removeChild(selectTag[0]);
  }
  canvas.initialize();
  newCircle();
}

canvas.initialize();
newCircle();
