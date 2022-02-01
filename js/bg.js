const CIRCLES = (function() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const circAmount = Math.round((w * h) / 40000);
  const cvs0 = document.getElementById('cvs0'); cvs0.width = w; cvs0.height = h;
  const cvs1 = document.getElementById('cvs1'); cvs1.width = w; cvs1.height = h;
  const cvs2 = document.getElementById('cvs2'); cvs2.width = w; cvs2.height = h;
  const cvs3 = document.getElementById('cvs3'); cvs3.width = w; cvs3.height = h;
  const cvs4 = document.getElementById('cvs4'); cvs4.width = w; cvs4.height = h;
  const cvsC0 = document.getElementById('cvs0-container'); cvsC0.width = w; cvsC0.height = h;
  const cvsC1 = document.getElementById('cvs1-container'); cvsC1.width = w; cvsC1.height = h;
  const cvsC2 = document.getElementById('cvs2-container'); cvsC2.width = w; cvsC2.height = h;
  const cvsC3 = document.getElementById('cvs3-container'); cvsC3.width = w; cvsC3.height = h;
  const cvsC4 = document.getElementById('cvs4-container'); cvsC4.width = w; cvsC4.height = h;
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
  const appendCanvases = [cvsC0,cvsC1,cvsC2,cvsC3,cvsC4]
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
      c.request=requestAnimationFrame(() => draw(c));
    } else {
      cancelAnimationFrame(c.request);
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
      c.request=requestAnimationFrame(function() {
        addStroke(c, (Math.PI * 2) * c.curr / 100 + c.start);
      });
    } else {
      
      (c.ani === 'rotate') ? rotate(c) : c.request = requestAnimationFrame(() => bounce(c));
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

  const circle = () => {
      let _c = {};
      let speed = rndmRng(5, 1);
      _c.radius = 0,_c.curr = 0;
      _c.clear = { x: 0, y: 0, w: 0, h: 0 };
      _c.innerCrcmf = rndmRng(230, 50);
      _c.outerRadius = Math.round(_c.innerCrcmf*rndmRng(.8,.6));
      _c.color = rndmArrI(colors);
      _c.light = rndmRng(60, 10);
      _c.hue = rndmRng(60, 10);
      _c.start = Math.random() * Math.PI * 2;
      _c.element =  document.createElement('canvas'); 
      _c.element.classList.add('circle');
      _c.ctx =  _c.element.getContext('2d');
      _c.ctx.canvas.width = _c.outerRadius*2+16
      _c.ctx.canvas.height = _c.outerRadius*2+16
      _c.ctx.strokeStyle = rndmArrI(strokeColors);
      _c.ctx.lineWidth = rndmRng(6,3);
      _c.ctx.globalCompositeOperation = 'xor';
      _c.x = Math.round(rndmRng(w-_c.outerRadius*2-60, 0));
      _c.y = Math.round(rndmRng(h-_c.outerRadius*2-60, 0));
      _c.grooves = rndmRng(90,60)  
      _c.ani = rndmArrI(movement);
      _c.request;
      if (_c.ani === "bounce") {
        _c.element.classList.add(rndmArrI(satClasses));
        _c.cvsAppend = rndmArrI(appendCanvases);
        _c.layer = rndmArrI(cvsesAPI);
        _c.dx = Math.cos(_c.start) / speed;
        _c.dy = Math.sin(_c.start) / speed;  
      } else {
        _c.cvsAppend = rndmArrI(appendCanvases);
        _c.layer = rndmArrI(cvsesCSS);
        _c.orbit = 250 -(distanceToC(_c.x+_c.outerRadius+8,_c.y+_c.outerRadius+8)/10)-_c.outerRadius*.53;
        _c.direction = (Math.random()>.5) ? "ccw" : "cw";
        if (Math.random()>.5) _c.orbit *=-.25;
        if(_c.orbit > 0 && _c.direction === "cw"){
          _c.start = 1.9;
        } else if(_c.orbit <=0  && _c.direction === "cw") {
          _c.start = 5;
        } else if(_c.orbit >0  && _c.direction === "ccw") {
          _c.start = 4;
        } else {
          _c.start = 1.2;
        }
      }
      _c.element.style.left= `${_c.x+8}px`,
      _c.element.style.top= `${_c.y+8}px`,
      _c.element.style.width= `${_c.outerRadius*2+16}px`;
      _c.element.style.heigth= `${_c.outerRadius*2+16}px`;
   
      _c.cvsAppend.appendChild(_c.element);

      return _c;
  };

  draw(circle());

  for (i=circAmount; i--;) 
    setTimeout(() => {draw(circle())}, i*rndmRng(2000,900));

})();