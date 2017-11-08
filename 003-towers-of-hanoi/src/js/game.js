
window.createGame = function createGame(setup) {
  function createGameState() {
    const newState = {
      rods: [
        [],
        [],
        [],
      ],
      numberofDisks: setup.disks,
      solved: false,
    };

    for (let i = 0; i < setup.disks; i += 1) {
      newState.rods[0][i] = { disk: i };
    }

    return newState;
  }

  let state = createGameState();
  const listeners = [];

  function notifyListeners() {
    for (let i = 0; i < listeners.length; i += 1) {
      listeners[i](state);
    }
  }

  return {
    // moves one disk from one rod to antoher,
    // returns true for valid move, false for invalid move
    move(command) {
      console.log(`moving disk from ${command.from} to ${command.to}`);
      // TODO implement move
      // 1. check if the command is valid
      // 2. remove the disk from the origin rod
      //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
      // 3. add the disk to the top(end) of the new rod
      //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
      // 4. check if the game is solved and update the state if so
      // 5. notifyListeners
      // 6. return true/false depending if the move was valid or not
    },
    // resets the game to the start again
    reset() {
      state = createGameState();
      notifyListeners();
    },
    // returns the game state
    getState() {
      return state;
    },
    // registers a listener that gets called everytime the
    // game changes
    addListener(listener) {
      listeners.push(listener);
    },
  };
};
