let instance

export default class dataBus {
  constructor() {
    if (instance)
      return instance

    instance = this

    this.reset()
  }

  reset() {
    console.log('reset data')
    this.frame = 0
    this.score = 0
    this.gameOver = false
    this.accX = 0
    this.accY = 0
    this.accZ = 0
  }
}