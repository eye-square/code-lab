
function createGame(setup) {
  // init game, create the rods and disks
  const state = {
    // todo add the intial game state
  };

  return {
    // moves one disk from one rod to antoher,
    // returns true for valid move, false for invalid move
    move(command) {
      // alter the game state if the command is valid
    },
    // resets the game to the start again
    reset() {},
    // returns the game state
    getState() {
      return state;
    },
    // registers a listener that gets called everytime the
    // game changes
    addListener(listener) {

    },
  };
}
