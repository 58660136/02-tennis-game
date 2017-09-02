function TennisGame(){
  const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
  this.playerAScore = 0
  this.reset = () => {
    this.playerAScore = 0
  }
  this.echo = () =>{
    return `${scoreString[this.playerAScore]} - Love`
  }
  this.playAGetScore = () =>{
    this.playerAScore++
  }
}
test('Echo "Love - Love" when press reset button',() => {
  // Arrange
  let app = new TennisGame()

  // Act
  app.reset()
  let result = app.echo()

  // Assert
  expect(result).toBe('Love - Love')

})

test('Echo "Fifteen - Love" when press button[A] get first score',() => {
  // Arrange
  let app = new TennisGame()
  app.reset()
  app.playAGetScore();
  // Act
  let result = app.echo()

  // Assert
  expect(result).toBe('Fifteen - Love')

})
