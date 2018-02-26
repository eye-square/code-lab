console.log('this will be towers of hanoi - the game');

const myGame = window.createGame({ disks: 3 }); // create a new game with 3 disks (default)

console.log('initial state', myGame.getState());

function weAreAListener(gameState) {
  console.log('gameState changed', JSON.stringify(gameState, null, ' '));
  if (gameState.solved === true) {
    alert('jippppieeeeeeee');
  }
}

myGame.addListener(weAreAListener);
