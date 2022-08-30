import * as PIXI from 'pixi.js'
import './init.js'
import './style.less'

const rndmArrI = (a) => a[Math.floor(Math.random() * a.length)]
const rndmRng = (h, l) => Math.random() * (h - l) + l
const colors = [209, 291, 263]
const strokeColors = ['506EE5', '68B2F8', '7037CD']

function hslToHex(h, s, l) {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }
  return `0x${f(0)}${f(8)}${f(4)}`
}
var Circle = function (bounds) {
  this.bounds = bounds
  this.cx = Math.round(rndmRng(this.bounds.right, this.bounds.left))
  this.cy = Math.round(rndmRng(this.bounds.bottom, this.bounds.top))
  this.start = Math.random() * Math.PI * 2
  this.speedX = Math.cos(this.start) / rndmRng(5, 1)
  this.speedY = Math.sin(this.start) / rndmRng(5, 1)
  this.radius = 0
  this.curr = 0
  this.innerCrcmf = rndmRng(90, 5)
  this.outerRadius = Math.round(this.innerCrcmf * rndmRng(0.8, 0.6))
  this.color = rndmArrI(colors)
  this.light = rndmRng(60, 10)
  this.grooves = rndmRng(90, 60)
  this.strokeColor = rndmArrI(strokeColors)

  this.graphics = new PIXI.Graphics()
  this.graphics.blendMode = PIXI.BLEND_MODES.XOR
  //this.graphics.x = this.cx
  //this.graphics.y = this.cy
}

Circle.prototype = Object.create(PIXI.Sprite.prototype)

Circle.prototype.update = function () {
  if (this.radius < this.innerCrcmf && typeof this.radius !== 'undefined') {
    this.radius += Math.round(this.innerCrcmf / this.grooves)
    /**  console.log(
      `hsl 2 hex: ${hslToHex(
        Math.round((this.color += 0.3)),
        Math.round(100 - rndmRng(50, 0)),
        Math.round((this.light += 0.1))
      )}`
    )*/
    //this.graphics.blendMode.XOR
    this.graphics.beginFill(
      hslToHex(
        Math.round((this.color += 0.3)),
        Math.round(100 - rndmRng(50, 0)),
        Math.round((this.light += 0.1))
      )
    )

    /**  this.graphics.beginFill = `hsl(${(this.color += 0.3)},${
      100 - rndmRng(50, 0)
    }%,${(this.light += 0.1)}%)`
    this.ctx.fill()
    */

    this.graphics.drawCircle(this.cx, this.cy, this.radius)
    return this.graphics
  }

  if (this.curr < 101) {
    this.graphics
      .arc(
        this.cx,
        this.cy,
        Math.round(this.innerCrcmf + rndmRng(40, 10)),
        this.start,
        (Math.PI * 2 * this.curr) / 100 + this.start,
        false
      )
      .lineStyle(rndmRng(20, 6), `0x${this.strokeColor}`)
    this.curr += 1.7
    if (this.curr == 100) this.graphics.cacheAsBitmap = true
  } else {
    /**
    console.log('else for movement')
    console.log(`1||| this.cx: ${this.cx} | this.cy: ${this.cy}`)
    console.dir(this.bounds)
     */
    //console.log(`this.graphics.x: ${this.graphics.x}`)
    //console.log(`this.graphics.y: ${this.graphics.y}`)
    if (
      this.graphics.x + this.cx + this.innerCrcmf > this.bounds.right ||
      this.graphics.x + this.cx < this.bounds.left
    ) {
      this.speedX *= -1
    } else if (
      this.graphics.y + this.cy < this.bounds.top ||
      this.graphics.y + this.cy + this.innerCrcmf > this.bounds.bottom
    ) {
      this.speedY *= -1
    }

    this.graphics.x -= this.speedX
    this.graphics.y -= this.speedY

    // this.graphics.x = this.cx
    //  this.graphics.y = this.cy
  }

  /** 
  c.ctx.beginPath()
    c.ctx.arc(
      c.outerRadius + 8,
      c.outerRadius + 8,
      Math.round(c.outerRadius),
      c.start,
      drawTo,
      false
    )
    c.ctx.stroke()
    c.curr += 1.7
    if (c.curr < 101) {
      c.request = requestAnimationFrame(function () {
        addStroke(c, (Math.PI * 2 * c.curr) / 100 + c.start)
      })
    } else {
      c.ani === 'rotate'
        ? rotate(c)
        : (c.request = requestAnimationFrame(() => bounce(c)))
    }



  //testjpf:  texture should be your canvas blob
  //PIXI.Sprite.call(this, texture);
  //    const pixiC = PIXI.Sprite.from(c.element)

  if (
    this.cx > this.bounds.right ||
    this.cx < this.bounds.left
  ) {
    this.speedX *= -1
  } else if (
    this.cy < this.bounds.top ||
    this.cy > this.bounds.bottom
  ) {
    this.speedY *= -1
  }
  this.cx += this.speedX
  this.cy += this.speedY
  */
}

/**
 * Don't use after this.
 * @method destroy
 */
Circle.prototype.destroy = function () {
  this.bounds = null
  PIXI.Sprite.prototype.destroy.call(this)
}

/**
 * Application call for simulation
 * @class CircleStage
 * @param {String} domElementSelector Selector for the frame element
 */
var CircleStage = function (domElementSelector) {
  this.circles = []

  this.domElement = document.getElementById(domElementSelector)

  /**
   * Stage bounds
   * @type {Object}
   */
  this.bounds = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }

  /**
   * Render for the stage
   * @type {PIXI.CanvasRenderer|PIXI.WebGLRenderer}
   */
  this.renderer = null

  /**
   * Container for the bunnies
   * @type {PIXI.Container}
   */
  this.stage = null
}

CircleStage.prototype.ready = function () {
  if (typeof PIXI === 'undefined') {
    this.domElement.addClass('error')
    throw 'PIXI is required to run'
  }

  var stage = document.getElementById('cvs0')

  this.bounds.right = stage.offsetWidth
  this.bounds.bottom = stage.offsetHeight

  var options = {
    view: stage,
    clearBeforeRender: true,
  }

  Object.assign(options, {
    width: this.bounds.right,
    height: this.bounds.bottom,
  })

  try {
    this.renderer = PIXI.autoDetectRenderer(options)
  } catch (err) {
    alert(err.message)
    return
  }

  this.stage = new PIXI.Container()
  this.stage.interactiveChildren = false

  // Handle window resizes
  /** 
  window.onresize = () => {
    'resize orientationchange', this.resize.bind(this)
  }

  this.resize()
  */
  this.startUpdate()
  /**
   * testjpf
   *
   * with hardoced delay, se which circle appear, which don't and why they are different
   */
  for (let i = 5; i--; ) {
    setTimeout(() => {
      this.addCircles()
      // }, i * rndmRng(2000, 900))
    }, i * 2000)
  }
}

CircleStage.prototype.addCircles = function () {
  console.log(`addCircles!!!`)
  var circle = new Circle(this.bounds)

  this.circles.push(circle)
  console.log(`circles amt: ${this.circles.length}`)
  console.dir(this.circles)
}

// Window ready
document.addEventListener('DOMContentLoaded', (e) => {
  // frame
  var app = new CircleStage('cvs0-container')

  app.ready()
})

CircleStage.prototype.startUpdate = function () {
  // console.log(' FFF START UPDATE FFF ')
  var _this = this
  requestAnimationFrame(function () {
    _this.update()
  })
}

/**
 * Resize the stage
 * @method resize
 */
CircleStage.prototype.resize = function () {
  var width = this.domElement.offsetWidth
  var height = this.domElement.offsetHeight
  this.bounds.right = width
  this.bounds.bottom = height
  this.renderer.resize(width, height)
}

/**
 * Remove all bunnies
 * @method reset
 */
CircleStage.prototype.reset = function () {
  this.stage.removeChildren()
  for (var i = this.circles.length - 1; i >= 0; i--) {
    var circle = this.circles[i]
    circle.destroy()
  }
  this.circles.length = 0
}

/**
 * Frame update function
 * @method update
 */
CircleStage.prototype.update = function () {
  if (this.circles.length > 0) {
    console.log(`this.circles.length: ${this.circles.length}`)
    for (let i = this.circles.length - 1; i--; ) {
      let fart = this.circles[i].update()
      if (fart) this.stage.addChild(fart)
    }
  }

  this.renderer.render(this.stage)

  this.startUpdate()
}
