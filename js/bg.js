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
    circles.length = 0;
    count = 0;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    ctx2.canvas.width = this.width;
    ctx2.canvas.height = this.height;
    ctx2.canvas.style.width = this.width;
    ctx2.canvas.style.height = this.height;
    document.body.appendChild(this.element);
  },
};

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

    jQuery(newCirc.element).css({
      width: `${newCirc.radius}px`,
      height: `${newCirc.radius}px`,
      backgroundColor: `hsl(${xform[2]},100%, ${xform[1]}%)`,
      left: `${newCirc.x}px`,
      top: `${newCirc.y}px`,
    });

    newCirc.element.classList.add('circle');
    canvas.element.appendChild(newCirc.element);
    return newCirc;
  },
  draw: function(c) {
    if (this.radius < this.randomRad && typeof this.radius !== 'undefined') {
      this.radius += (this.randomRad / 80);
      jQuery(this.element).css({
        width: `${this.radius}px`,
        height: `${this.radius}px`,
        backgroundColor: `hsl(${(this.xform[2] += .3)},100%,${(this.xform[1] += .3)}%)`,
      });
      requestAnimationFrame(() => this.draw(c));
    } else {
      ctx2.lineWidth = 2;
      ctx2.strokeStyle = this.strokeStyle;
      this.setStart(c);
    }
  },
  setStart: function(c) {
    if (this.ani === 'rotate') {
      if (this.x > (canvas.width / 2)) {
        this.start = 4.7;
      } else {
        this.start = 1.6;
      }
    } else if (this.ani === 'move2') {
      if (this.x > (canvas.width / 2) && this.y > (canvas.height / 2)) {
        this.start = 0.9;
      } else if (this.x < (canvas.width / 2) && this.y > (canvas.height / 2)) {
        this.start = 2.5;
      } else if (this.x < (canvas.width / 2) && this.y < (canvas.height / 2)) {
        this.start = 3.8;
      } else {
        this.start = 5.6;
      }
    }
    requestAnimationFrame(() => this.addStroke(c));
  },
  addStroke: function(c, drawTo) {
    ctx2.beginPath();
    ctx2.arc(this.x + (this.radius / 2), this.y + (this.radius / 2),
      (this.radius / 2) + 4, this.start, drawTo, false);
    ctx2.stroke();
    this.curr += 1.7;
    if (this.curr < 101) {
      requestAnimationFrame(function() {
        c.addStroke(c, (Math.PI * 2) * c.curr / 100 + c.start);
      });
    } else {
      let circBlock = this.radiusStroke * 3.3;
      ctx2.clearRect((this.x - (circBlock / 2)), (this.y - (circBlock / 2)),
        circBlock, circBlock);
      jQuery(this.element).css({
        boxShadow: `0 0 0 3px ${this.strokeStyle}`,
        border: '3px solid #1D0C20',
        left: `${this.x -= 3}px`,
        top: `${this.y -= 3}px`,
      });
      (this.ani === 'rotate' && requestAnimationFrame(() => this.rotate(c)));
      (this.ani === 'move' && requestAnimationFrame(() => this.move(c)));
      (this.ani === 'move2' && requestAnimationFrame(() => this.move2(c)));
      (circles.length > 0 && newCircle());
    }
  },
  move2: function(c) {
    if (this.x > (canvas.width / 2) && this.y > (canvas.height / 2)) {
      this.element.style.animation = `moveL ${rndmRng(350, 30)}s linear 0s infinite
       alternate, moveU ${rndmRng(350, 30)}s linear 0s infinite alternate`;
    } else if (this.x < (canvas.width / 2) && this.y > (canvas.height / 2)) {
      this.element.style.animation = `moveR ${rndmRng(350, 30)}s linear 0s infinite
       alternate, moveU ${rndmRng(350, 30)}s linear 0s infinite alternate`;
    } else if (this.x < (canvas.width / 2) && this.y < (canvas.height / 2)) {
      this.element.style.animation = `moveR ${rndmRng(350, 30)}s linear 0s infinite
       alternate, moveD ${rndmRng(350, 30)}s linear 0s infinite alternate`;
    } else {
      this.element.style.animation = `moveL ${rndmRng(350, 30)}s linear 0s infinite
       alternate, moveD ${rndmRng(350, 30)}s linear 0s infinite alternate`;
    }
    this.element.classList.add('circle-2');
  },
  move: function(c) {
    if (this.x > (canvas.width - (this.randomRad + 10)) || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > (canvas.height - (this.randomRad + 10)) || this.y < 0) {
      this.dy = -this.dy;
    }
    this.x -= this.dx;
    this.y -= this.dy;
    jQuery(this.element).css({
      top: `${this.y}px`,
      left: `${this.x}px`,
    });

    requestAnimationFrame(() => this.move(c));
  },
  rotate: function(c) {
    let orbit = (1000 / (Math.abs(this.y - (canvas.height / 2)) + 100) * 150);
    if (this.x > (canvas.width / 2)) {
      this.element.style.transformOrigin = `-${orbit}% center`;
    } else {
      this.element.style.transformOrigin = `${orbit}% center`;
    }
    this.element.classList.add('circle-2');
  },
};
const circleInit = (c) => requestAnimationFrame(() => c.draw(c));
const rndmRngArr = (r, l, c) => [r, l, c];
const rndmRng = (h, l) => Math.random() * (h - l) + l;
const rndmArrI = (a) => a[Math.floor(Math.random() * a.length)];

function newCircle() {
  let circAmount = Math.round((canvas.width * canvas.height) / 30000);
  color = rndmArrI(colors);
  if (circles.length < circAmount) {
    circles.push(Circle.create(count, rndmArrI(movement), rndmRng(2, -2),
      rndmRng(2, -2), rndmRngArr(rndmRng(25, 8), rndmRng(60, 10),
        rndmRng(color, color - 60))));
    circleInit(circles[count]);
    count++;
  }
}

let timeout = false;
window.addEventListener('resize', function() {
  clearTimeout(timeout);
  timeout = setTimeout(doneResizing, 800);
});

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
