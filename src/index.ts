import * as PIXI from 'pixi.js'
import './init.ts'
import './assets/style.less'

interface Bounds {
  top: number
  bottom: number
  left: number
  right: number
}

const rndmRng = (h: number, l: number) => Math.random() * (h - l) + l

const hslToHex = (h: number, s: number, l: number): number => {
  l /= 100
  const a = (s * Math.min(l, 1 - l)) / 100
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0')
  }
  return parseInt(`0x${f(0)}${f(8)}${f(4)}`)
}

function debounce<Params extends unknown[]>(
  func: (...args: Params) => unknown,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout
  return (...args: Params) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, timeout)
  }
}

export default class XorCircles {
  static circles: Circle[] = []
  drapes: Drape[] = []
  timeouts: ReturnType<typeof setTimeout>[] = []
  static strokeColors = ['506EE5', '68B2F8', '7037CD']
  static fillColors = [209, 291, 263]
  static sprites: PIXI.Sprite[]

  static getSprite(index: number) {
    return this.sprites[index]
  }

  static getStrokeColors() {
    return this.strokeColors[
      Math.floor(Math.random() * this.strokeColors.length)
    ]
  }
  static getFillColors() {
    return this.fillColors[Math.floor(Math.random() * this.fillColors.length)]
  }

  createDrapes() {
    const loader = new PIXI.Loader()
    loader
      .add(
        'd58',
        `https://res.cloudinary.com/drrbpdpzn/image/upload/f_auto,q_auto/v1678708424/cv_joe/img/58_bmzmy6.webp`
      )
      .add(
        'd74',
        `https://res.cloudinary.com/drrbpdpzn/image/upload/f_auto,q_auto/v1678708424/cv_joe/img/74_yfoyra.webp`
      )
      .add(
        'd106',
        `https://res.cloudinary.com/drrbpdpzn/image/upload/f_auto,q_auto/v1678708424/cv_joe/img/106_sb94aw.webp`
      )
    loader.load((loader, resources) => {
      const tiles = Object.keys(resources)
      tiles.forEach((t) => {
        for (let start = 0; start < window.innerWidth; start++) {
          const sprite = new PIXI.Sprite(resources[t].texture)
          const drape = new Drape(AnimationStage.bounds, start, sprite)

          this.timeouts.push(
            setTimeout(() => {
              this.drapes.push(drape)
              AnimationStage.stage.addChild(drape.sprite)
            }, Math.round(start * rndmRng(15, 1)))
          )

          start += drape.sprite.width
        }
      })
    })
  }

  init(bounds: Bounds) {
    this.createDrapes()

    const circleAmount = Math.round((bounds.right * bounds.bottom) / 110000)

    for (let i = circleAmount; i--; ) {
      this.timeouts.push(
        setTimeout(() => {
          const circle = new Circle(bounds)
          XorCircles.circles.push(circle)
        }, i * rndmRng(2000, 900))
      )
    }
  }

  update() {
    if (XorCircles.circles.length > 0) {
      for (let i = XorCircles.circles.length; i--; ) {
        const child = XorCircles.circles[i].update()
        if (child) AnimationStage.stage.addChild(child)
      }
    }

    if (this.drapes.length > 0) {
      for (let i = this.drapes.length; i--; ) {
        this.drapes[i].update()
      }
    }
  }

  reset(restart: boolean) {
    for (const to in this.timeouts) {
      window.clearTimeout(to)
    }
    AnimationStage.stage.removeChildren()
    XorCircles.circles.length = 0
    AnimationStage.newContainer()
    if (restart) this.init(AnimationStage.bounds)
  }
}

export class AnimationStage {
  static renderer: PIXI.AbstractRenderer
  static getRenderer() {
    return this.renderer
  }
  static bounds: Bounds
  static getBounds() {
    return this.bounds
  }
  static stage: PIXI.Container
  static getStage() {
    return this.stage
  }

  domElement: HTMLElement
  renderer: PIXI.AbstractRenderer
  defaultAnimation: XorCircles

  constructor(domElementSelector: string) {
    this.domElement = document.getElementById(domElementSelector)
    this.defaultAnimation = new XorCircles()

    AnimationStage.bounds = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    }
  }

  static newContainer() {
    if (AnimationStage.stage)
      AnimationStage.stage.destroy({
        children: true,
        texture: true,
        baseTexture: true,
      })
    AnimationStage.stage = new PIXI.Container()
    AnimationStage.stage.interactiveChildren = false
  }

  ready() {
    if (typeof PIXI === 'undefined') {
      this.domElement.classList.add('error')
      throw 'PIXI is required to run'
    }

    const stage = document.getElementById('cvs0') as HTMLCanvasElement

    AnimationStage.bounds.right = stage.offsetWidth
    AnimationStage.bounds.bottom = stage.offsetHeight

    const options = {
      backgroundAlpha: 0,
      view: stage,
      clearBeforeRender: true,
    }

    Object.assign(options, {
      width: AnimationStage.bounds.right,
      height: AnimationStage.bounds.bottom,
    })

    try {
      this.renderer = PIXI.autoDetectRenderer(options)
      AnimationStage.renderer = this.renderer
    } catch (err) {
      alert(err.message)
      return
    }

    AnimationStage.newContainer()

    this.startUpdate()
    window.addEventListener('resize', debounce(this.resize.bind(this), 400))

    this.defaultAnimation.init(AnimationStage.bounds)
  }

  startUpdate() {
    requestAnimationFrame(() => this.update())
  }

  update() {
    this.defaultAnimation.update()
    this.renderer.render(AnimationStage.stage)
    this.startUpdate()
  }

  resize() {
    const prevWidth = AnimationStage.bounds.right
    const prevHeight = AnimationStage.bounds.bottom
    const width = this.domElement.offsetWidth
    const height = this.domElement.offsetHeight
    AnimationStage.bounds.right = width
    AnimationStage.bounds.bottom = height
    if (
      Math.abs(prevWidth - width) > 50 ||
      Math.abs(prevHeight - height) > 50
    ) {
      this.renderer.resize(width, height)
      this.defaultAnimation.reset(true)
    }
  }
}

export const app = new AnimationStage('cvs0-container')
app.ready()

class Circle {
  bounds: Bounds
  cx: number
  cy: number
  start: number
  speedX: number
  speedY: number
  radius: number
  curr: number
  innerCrcmf: number
  grooves: number
  color: number
  light: number
  strokeColor: string
  graphics: PIXI.Graphics | PIXI.Sprite

  constructor(bounds: Bounds) {
    this.bounds = bounds
    this.innerCrcmf = rndmRng(
      Math.round((bounds.right * bounds.bottom) / 120000),
      Math.round((bounds.right * bounds.bottom) / 15000)
    )
    this.cx = Math.round(
      rndmRng(
        this.bounds.right - 85 - this.innerCrcmf,
        this.bounds.left + 85 + this.innerCrcmf
      )
    )
    this.cy = Math.round(
      rndmRng(
        this.bounds.bottom - 85 - this.innerCrcmf,
        this.bounds.top + 85 + this.innerCrcmf
      )
    )
    this.start = Math.random() * Math.PI * 2
    this.speedX = Math.cos(this.start) / rndmRng(5, 1)
    this.speedY = Math.sin(this.start) / rndmRng(5, 1)
    this.radius = 0
    this.curr = 0

    this.grooves = rndmRng(20, 5)
    this.color = XorCircles.getFillColors()
    this.light = rndmRng(60, 10)
    this.strokeColor = XorCircles.getStrokeColors()
    this.graphics = new PIXI.Graphics()
    this.graphics.blendMode = PIXI.BLEND_MODES.XOR
  }

  update() {
    if (this.radius < this.innerCrcmf && typeof this.radius !== 'undefined') {
      if (this.graphics instanceof PIXI.Graphics) {
        this.radius += Math.round(this.innerCrcmf / this.grooves)
        const hex: number = hslToHex(
          Math.round((this.color += 0.3)),
          Math.round(100 - rndmRng(50, 0)),
          Math.round((this.light += 0.1))
        )
        this.graphics.beginFill(hex)

        this.graphics.drawCircle(this.cx, this.cy, this.radius)
        return this.graphics
      }
    }

    if (this.curr < 101) {
      if (this.graphics instanceof PIXI.Graphics) {
        this.graphics
          .arc(
            this.cx,
            this.cy,
            Math.round(this.innerCrcmf + rndmRng(67, 25)),
            this.start,
            (Math.PI * 2 * this.curr) / 100 + this.start,
            false
          )
          .lineStyle(
            Math.round(rndmRng(22, 5)),
            parseInt(`0x${this.strokeColor}`)
          )
        this.curr += rndmRng(3.3, 1.7)
      }
      if (this.curr >= 101 && Math.random() < 0.5)
        this.graphics.cacheAsBitmap = true
    } else {
      if (
        this.graphics.x + this.cx + this.graphics.width / 2 >
          this.bounds.right ||
        this.graphics.x + this.cx - this.graphics.width / 2 < this.bounds.left
      ) {
        this.speedX *= -1
      } else if (
        this.graphics.y + this.cy - this.graphics.height / 2 <
          this.bounds.top ||
        this.graphics.y + this.cy + this.graphics.width / 2 > this.bounds.bottom
      ) {
        this.speedY *= -1
      }
      this.graphics.x -= this.speedX
      this.graphics.y -= this.speedY
    }
  }
}

class Drape {
  bounds: Bounds
  sprite: PIXI.Sprite
  startAngle = 0
  swing = rndmRng(0.06, 0.008)
  sway = rndmRng(30, 5)
  startX: number
  flipSwing = Math.random() < 0.5 ? 1 : -1
  flipSway = Math.random() < 0.5 ? 1 : -1
  droppedY = rndmRng(-20, -40)

  constructor(bounds: Bounds, x: number, sprite: PIXI.Sprite) {
    this.bounds = bounds
    this.sprite = sprite
    this.sprite.height = rndmRng(
      this.bounds.bottom * 1.6,
      this.bounds.bottom * 1.3
    )
    this.startX = x
    this.sprite.x = x
    this.sprite.y = this.droppedY - this.sprite.height
    this.sprite.anchor.set(0.5, rndmRng(0.4, 0.1))
    this.sprite.cacheAsBitmap = true

    return this
  }

  update() {
    if (this.sprite.y < this.droppedY) {
      this.sprite.y += 3
    }
    if (this.sprite.rotation > this.startAngle + this.swing) {
      this.flipSwing = -1
    }

    if (this.sprite.rotation <= this.startAngle - this.swing) {
      this.flipSwing = 1
    }

    this.sprite.rotation += (this.swing * this.flipSwing) / rndmRng(800, 200)

    if (this.sprite.x > this.startX + this.sway) {
      this.flipSway = -1
    }

    if (this.sprite.x <= this.startX - this.sway) {
      this.flipSway = 1
    }

    this.sprite.x += (this.sway * this.flipSway) / rndmRng(500, 40)
  }
}
