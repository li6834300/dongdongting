

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const BG_WIDTH = 512
const BG_HEIGHT = 512

export default class Background {
  constructor(ctx){
    this.render(ctx)
  }

  render(ctx){
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, screenWidth, screenHeight);
  }
}