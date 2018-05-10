
import DataBus from '../dataBus.js'

let origScore = 0
export default class GameInfo{
  renderGameScore(ctx, score=0){
    
    ctx.fillStyle = "#ffffff"
    ctx.font = "20px Arial"

    // console.log('DataBus.score', DataBus.accX)
    ctx.fillText(
      'your score is: ' + score,
      10,
      30
    )
  }

  updateScore(ctx, score){
    console.log('DataBus.score', DataBus.score)
    this.renderGameScore(ctx, score)
  }
}