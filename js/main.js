
import BackGround from './runtime/background.js'
import GameInfo from './runtime/gameInfo.js'
import DataBus from './dataBus.js'

let ctx   = canvas.getContext('2d')
let Databus = new DataBus()
/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.restart()
  }

  restart() {
    Databus.reset()
    this.bg = new BackGround(ctx)
    
    this.gameInfo = new GameInfo()
    canvas.removeEventListener(
      'touchstart',
      this.touchHandler
    );
    DataBus.score = 0
    DataBus.accX  = 0

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
    wx.startAccelerometer({
      success: function(){
        console.log('acc start')
      }
    })

  }
  

  render() {
    
    this.bg.render(ctx)
    this.gameInfo.renderGameScore(ctx, DataBus.score)
  }

  update() {

  }

  loop() {
    this.update()
    this.render()

    if(DataBus.gameOver){
      wx.stopAccelerometer()

      this.touchHandler = this.touchEventHandler.bind(this)
      canvas.addEventListener('touchstart', this.touchHandler)
    }


    wx.onAccelerometerChange(function (res) {
      // console.log('res.x is , ', res.x, 'rex.y is ', res.y)
      // 
      let diffX = Math.abs(Databus.accX - Math.floor(res.x * 100))
      DataBus.score = DataBus.score + diffX
      // this.gameInfo.updateScore(ctx, res.x)
    })

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )

    
  }

  touchEventHandler(e) {
    e.preventDefault()

    let x = e.touches[0].clientX
    let y = e.touches[0].clientY

//TODO I am going to remove button restriction for now
    // let area = this.gameinfo.btnArea

    // if (x >= area.startX
    //   && x <= area.endX
    //   && y >= area.startY
    //   && y <= area.endY)
      this.restart()
  }
  
}
