

export default class GameInfo{
  renderGameScore(ctx, score=0){
    ctx.fillStyle = "#ffffff"
    ctx.font = "20px Arial"

console.log('game info filled')
    ctx.fillText(
      'your score is: ' + score,
      10,
      30
    )
  }
}