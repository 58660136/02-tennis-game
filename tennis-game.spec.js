function TennisGame(){
  const scoreString = ['Love', 'Fifteen', 'Thirty', 'Forthy']
  this.playerAScore = 0
  this.playerBScore = 0
  this.reset = () => {
    this.playerAScore = 0
    this.playerBScore = 0
  }
  this.echo = () =>{
    return `${scoreString[this.playerAScore]} - ${scoreString[this.playerBScore]}`
  }
  this.playAGetScore = () =>{
    this.playerAScore++
  }
  this.playBGetScore = () =>{
    this.playerBScore++
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

test('Echo "Fifteen - Love" when player button[A] get first score',() => {
  // Arrange
  let app = new TennisGame()
  app.reset()
  app.playAGetScore();
  // Act
  let result = app.echo()

  // Assert
  expect(result).toBe('Fifteen - Love')

})

test('Echo "Love - Fifteen" when player button[B] get first score',() => {
  // Arrange
  let app = new TennisGame()
  app.reset()
  app.playBGetScore();
  // Act
  let result = app.echo()

  // Assert
  expect(result).toBe('Love - Fifteen')

})

test('Echo "Thirty - Forthy" when playerA get 2 score and playerB get 3 score',() => {
  // Arrange
  let app = new TennisGame()

  app.playAGetScore();
  app.playAGetScore();
  app.playBGetScore();
  app.playBGetScore();
  app.playBGetScore();
  // Act
  let result = app.echo()

  // Assert
  expect(result).toBe('Thirty - Forthy')

})
