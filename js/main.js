
import BackGround from './runtime/background.js'
import GameInfo from './runtime/gameInfo.js'
let ctx   = canvas.getContext('2d')

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.restart()
  }

  restart() {
    this.bg = new BackGround(ctx)
    this.gameInfo = new GameInfo()
    canvas.removeEventListener(
      'touchstart',
      this.touchHandler
    );

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )

  }

  render() {
    
    this.bg.render(ctx)
    this.gameInfo.renderGameScore(ctx, 0)
  }

  update() {

  }

  loop() {
    this.update()
    this.render()
    
    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
  
}
