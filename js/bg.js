const CIRCLES = (function() {
  let circles = [];
  let count = 0;
  let circAmount = 1;
  const canvas0 = document.getElementById('canvas0');
  const canvas1 = document.getElementById('canvas1');
  const canvas2 = document.getElementById('canvas2');
  const canvas3 = document.getElementById('canvas3');
  const canvas4 = document.getElementById('canvas4');

  /**COMPARE TO ALL CSSS!!!!!!! TESTJPF */

  const w = window.innerWidth;
  const h = window.innerHeight;
  canvas0.width = w;
  canvas0.height = h;
  canvas1.width = w;
  canvas1.height = h;
  canvas2.width = w;
  canvas2.height = h;
  canvas3.width = w;
  canvas3.height = h;
  canvas4.width = w;
  canvas4.height = h;

  const canvasesAPI = [
    canvas1.getContext('2d'),
    canvas3.getContext('2d'),
  ];
  const canvasesCSS = [
    canvas0.getContext('2d'),
    canvas2.getContext('2d'),
    canvas4.getContext('2d'),
  ];
  const movement = ['rotate', 'bounce','rotate'];
  const colors = [209, 291, 263];
  const strokeColors = ['#506EE5', '#68B2F8', '#7037CD'];
  const cvs = {
    element: document.getElementById('bg'),
    initialize: function() {
      this.width = w;
      this.height = h;
      this.hw = w / 2;
      this.hh = h / 2;
      this.element.style.width = `${w}px`;
      this.element.style.height = `${h}px`;
      document.body.appendChild(this.element);
      circAmount = Math.round((w * h) / 60000);
    },
  };

  const rndmRng = (h, l) => Math.random() * (h - l) + l;
  const rndmArrI = (a) => a[Math.floor(Math.random() * a.length)];
  const distanceToC = (px,py) => Math.sqrt((Math.pow(px-w/2,2))+(Math.pow(py-h/2,2)));

 const draw = (c) => {
    if (c.radius < c.innerCrcmf && typeof c.radius !== 'undefined') {
      c.radius += Math.round(c.innerCrcmf / c.grooves);
      c.ctx.arc(c.outerRadius+8,c.outerRadius+8,c.radius/2,0,2*Math.PI);
      c.ctx.fillStyle=`hsl(${(c.color += .3)},${100-rndmRng(50,0)}%,${(c.light += .1)}%)`;
      c.ctx.fill();
      requestAnimationFrame(() => draw(c));
    } else {
      addStroke(c);
    }
  };

  const addStroke = (c, drawTo) => {
    c.ctx.beginPath();
    c.ctx.arc(
      c.outerRadius+8, 
      c.outerRadius+8,
      Math.round(c.outerRadius), 
      c.start, 
      drawTo, 
      false
    );
    c.ctx.stroke();
    c.curr += 1.7;
    if (c.curr < 101) {
      requestAnimationFrame(function() {
        addStroke(c, (Math.PI * 2) * c.curr / 100 + c.start);
      });
    } else {
      (c.ani === 'rotate' && requestAnimationFrame(() => rotate(c)));
      (c.ani === 'bounce' && requestAnimationFrame(() => bounce(c)));
      (circles.length > 0 && newCircle());
    }
  };

  const rotate = (c) => {
    c.layer.drawImage(c.element, Math.round(c.x)+8, Math.round(c.y)+8);
    (c.direction==="ccw") ? c.element.classList.add('circle-3') : c.element.classList.add('circle-2');
    c.element.style.transformOrigin = `${c.orbit}%`;
  };

  const bounce = (c) => {
    c.layer.clearRect(Math.round(c.clear.x),Math.round(c.clear.y),Math.round(c.clear.w),Math.round(c.clear.h))
    if (c.x + c.outerRadius*2 + 16 > w  || c.x +8 < 0) {
      c.dx = -c.dx;
    }
    if (c.y + c.outerRadius*2 + 16 > h|| c.y +8 < 0) {
      c.dy = -c.dy;
    }
    c.x -= c.dx;
    c.y -= c.dy;
    c.layer.drawImage(c.element, c.x+8, c.y+8) 
    c.clear={
      x: Math.round(c.x + 8),
      y:Math.round(c.y + 8),
      w:c.ctx.canvas.width,
      h:c.ctx.canvas.height
    }
    requestAnimationFrame(() => bounce(c));
  };

  const Circle = {
    create: function() {
      const newCirc = Object.create(this);

      let speed = rndmRng(5, 1);

      newCirc.radius = 0,newCirc.curr = 0;
      newCirc.clear = { x: 0, y: 0, w: 0, h: 0 };
      
      newCirc.innerCrcmf = rndmRng(210, 40);
      newCirc.outerRadius = Math.round(newCirc.innerCrcmf*rndmRng(.8,.6));
      
      newCirc.color = rndmArrI(colors);
      newCirc.light = rndmRng(60, 10);
      newCirc.hue = rndmRng(60, 10);
      newCirc.start = Math.random() * Math.PI * 2;
      newCirc.element =  document.createElement('canvas');
      
      newCirc.ani = rndmArrI(movement);

      if (newCirc.ani === "bounce") {
        newCirc.layer = rndmArrI(canvasesAPI);
        newCirc.dx = Math.cos(newCirc.start) / speed;
        newCirc.dy = Math.sin(newCirc.start) / speed;  
        newCirc.x = Math.round(rndmRng(w-newCirc.outerRadius*2-60, 0));
        newCirc.y = Math.round(rndmRng(h-newCirc.outerRadius*2-60, 0));
      } else {
        newCirc.layer = rndmArrI(canvasesCSS);
        newCirc.x = Math.round(rndmRng(w-newCirc.outerRadius*2, 0));
        newCirc.y = Math.round(rndmRng(h-newCirc.outerRadius*2, 0));
        newCirc.orbit = 250 -(distanceToC(newCirc.x+newCirc.outerRadius+8,newCirc.y+newCirc.outerRadius+8)/10)-newCirc.outerRadius*.53;
        console.log(`orbit: ${newCirc.orbit}`)
        newCirc.direction = (Math.random()>.5) ? "ccw" : "cw";
        if (Math.random()>.5) newCirc.orbit *=-.25;

        if(newCirc.orbit > 0 && newCirc.direction === "cw"){
          newCirc.start = 3.4
        } else if(newCirc.orbit <=0  && newCirc.direction === "cw") {
          newCirc.start = 0.6;
        } else if(newCirc.orbit >0  && newCirc.direction === "ccw") {
          newCirc.start = 6.2
        } else {
          newCirc.start = 2.9
        }
      }
      
      newCirc.ctx =  newCirc.element.getContext('2d');
      newCirc.ctx.canvas.width = newCirc.outerRadius*2+16
      newCirc.ctx.canvas.height = newCirc.outerRadius*2+16
      newCirc.ctx.strokeStyle = rndmArrI(strokeColors);
      newCirc.ctx.lineWidth = rndmRng(6,3);
      newCirc.ctx.globalCompositeOperation = 'xor';
      newCirc.element.style.left= `${newCirc.x+8}px`,
      newCirc.element.style.top= `${newCirc.y+8}px`,
      newCirc.element.classList.add('circle');
      newCirc.grooves = rndmRng(90,60)

      cvs.element.appendChild(newCirc.element);
      newCirc.ctx.beginPath();
      return newCirc;
    }
  };
  const circleInit = (c) => requestAnimationFrame(() => {
    c.element.style.width= `${c.outerRadius*2+16}px`;
    c.element.style.heigth= `${c.outerRadius*2+16}px`;
    draw(c);
  });

  function newCircle() {
    if (circles.length < circAmount) {
      circles.push(Circle.create());
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
    circles = [];
    count = 0;
    const selectTag = document.getElementsByClassName('circle');
    while (selectTag[0]) {
      selectTag[0].parentNode.removeChild(selectTag[0]);
    }
    cvs.initialize();
    newCircle();
  }

  cvs.initialize();
  newCircle();
})();
