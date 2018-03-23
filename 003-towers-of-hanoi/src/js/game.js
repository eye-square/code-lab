window.createGame = function createGame(setup) {
  function createGameState() {
    const newState = {
      rods: [[], [], []],
      numberofDisks: setup.disks,
      solved: false,
    };

    for (let i = 0; i < setup.disks; i += 1) {
      newState.rods[0].push({ disk: i });
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

  function commandIsValid({ from, to }) {
    const toRod = state.rods[to];
    const fromRod = state.rods[from];

    if (
      state.solved === true || // test if game is solved
      fromRod === undefined || // test if from rods exists
      toRod === undefined || // test if to rod exists
      fromRod.length === 0 // test if disk exists
    ) {
      return false;
    }

    // test if disk is smaller than the target disk (game rule)
    if (toRod.length === 0) {
      return true;
    }

    // if(fromDisk smaller than toDisk) {
    if (fromRod[fromRod.length - 1].disk > toRod[toRod.length - 1].disk) {
      return true;
    }
    return false;
  }

  function moveDisk(command) {
    // 2. remove the disk from the origin rod
    //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
    const disk = state.rods[command.from].pop();
    // 3. add the disk to the top(end) of the new rod
    //      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
    state.rods[command.to].push(disk);
  }

  function checkIfGameIsSolved() {
    if (state.rods[2].length === state.numberofDisks) {
      state.solved = true;
    }
  }

  return {
    // moves one disk from one rod to antoher,
    // returns true for valid move, false for invalid move
    move(command) {
      console.log(`moving disk from ${command.from} to ${command.to}`);
      if (commandIsValid(command)) {
        console.log('valid command');
        moveDisk(command);
        checkIfGameIsSolved();
        notifyListeners();
        return true;
      }
      console.log('invalid command');
      return false;
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
