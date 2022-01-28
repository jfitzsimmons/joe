const CIRCLES = (function() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const circAmount = Math.round((w * h) / 80000);
  const cvs0 = document.getElementById('cvs0'); cvs0.width = w; cvs0.height = h;
  const cvs1 = document.getElementById('cvs1'); cvs1.width = w; cvs1.height = h;
  const cvs2 = document.getElementById('cvs2'); cvs2.width = w; cvs2.height = h;
  const cvs3 = document.getElementById('cvs3'); cvs3.width = w; cvs3.height = h;
  const cvs4 = document.getElementById('cvs4'); cvs4.width = w; cvs4.height = h;
  const cvs = document.getElementById('bg'); cvs.width = w; cvs.height = h;
  cvs.style.width = `${w}px`;
  cvs.style.height = `${h}px`;
  const cvsesAPI = [
    cvs1.getContext('2d'),
    cvs3.getContext('2d'),
  ];
  const cvsesCSS = [
    cvs0.getContext('2d'),
    cvs2.getContext('2d'),
    cvs4.getContext('2d'),
  ];
  const movement = ['rotate', 'bounce','rotate'];
  const colors = [209, 291, 263];
  const strokeColors = ['#506EE5', '#68B2F8', '#7037CD'];


  const satClasses = [`canvas1`,`canvas2`,`canvas3`,`canvas4`,`canvas5`]
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
    }
  };

  const rotate = (c) => {
    c.layer.drawImage(c.element, Math.round(c.x)+8, Math.round(c.y)+8);
    (c.direction==="ccw") ? c.element.classList.add('circle-3') : c.element.classList.add('circle-2');
    c.element.style.transformOrigin = `${c.orbit}%`;
  };

  const bounce = (c) => {
    c.layer.clearRect(c.clear.x,c.clear.y,c.clear.w,c.clear.h)
    if (c.x + c.outerRadius*2 + 16 > w  || c.x +8 < 0) {
      c.dx = -c.dx;
    }
    if (c.y + c.outerRadius*2 + 16 > h|| c.y +8 < 0) {
      c.dy = -c.dy;
    }
    c.x -= c.dx;
    c.y -= c.dy;
    c.layer.drawImage(c.element, Math.round(c.x+8), Math.round(c.y+8)) 
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
      newCirc.innerCrcmf = rndmRng(230, 50);
      newCirc.outerRadius = Math.round(newCirc.innerCrcmf*rndmRng(.8,.6));
      newCirc.color = rndmArrI(colors);
      newCirc.light = rndmRng(60, 10);
      newCirc.hue = rndmRng(60, 10);
      newCirc.start = Math.random() * Math.PI * 2;
      newCirc.element =  document.createElement('canvas');   
      newCirc.ani = rndmArrI(movement);
      if (newCirc.ani === "bounce") {
        newCirc.layer = rndmArrI(cvsesAPI);
        newCirc.dx = Math.cos(newCirc.start) / speed;
        newCirc.dy = Math.sin(newCirc.start) / speed;  
        newCirc.x = Math.round(rndmRng(w-newCirc.outerRadius*2-60, 0));
        newCirc.y = Math.round(rndmRng(h-newCirc.outerRadius*2-60, 0));
      } else {
        newCirc.element.classList.add(rndmArrI(satClasses));
        newCirc.layer = rndmArrI(cvsesCSS);
        newCirc.x = Math.round(rndmRng(w-newCirc.outerRadius*2, 0));
        newCirc.y = Math.round(rndmRng(h-newCirc.outerRadius*2, 0));
        newCirc.orbit = 250 -(distanceToC(newCirc.x+newCirc.outerRadius+8,newCirc.y+newCirc.outerRadius+8)/10)-newCirc.outerRadius*.53;
        newCirc.direction = (Math.random()>.5) ? "ccw" : "cw";
        if (Math.random()>.5) newCirc.orbit *=-.25;
        if(newCirc.orbit > 0 && newCirc.direction === "cw"){
          newCirc.start = 1.9;
        } else if(newCirc.orbit <=0  && newCirc.direction === "cw") {
          newCirc.start = 5;
        } else if(newCirc.orbit >0  && newCirc.direction === "ccw") {
          newCirc.start = 4;
        } else {
          newCirc.start = 1.2;
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
      newCirc.element.style.width= `${newCirc.outerRadius*2+16}px`;
      newCirc.element.style.heigth= `${newCirc.outerRadius*2+16}px`;
      newCirc.element.classList.add('circle');
      newCirc.grooves = rndmRng(90,60)

      cvs.appendChild(newCirc.element);

      return newCirc;
    }
  };

/** 
  let timeout = false;
  window.addEventListener('resize', function() {
    clearTimeout(timeout);
    timeout = setTimeout(doneResizing, 800);
  });
*/ /** 
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
*/
  draw(Circle.create());
 for (i=circAmount; i--;) 
    setTimeout(() => {draw(Circle.create())}, i*rndmRng(2000,900));
})();
