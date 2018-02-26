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

  function commandIsValid(command) {
    // { from: 1, to: 2 }
    // test if game is solved
    if (state.solved === true) {
      return false;
    }
    // test if from rods exists
    if (state.rods[command.from] === undefined) {
      return false;
    }
    // test if to rod exists
    if (state.rods[command.to] === undefined) {
      return false;
    }
    // test if disk exists
    if (state.rods[command.from].length === 0) {
      return false;
    }

    // test if disk is smaller than the target disk (game rule)
    const toRod = state.rods[command.to];
    if (toRod.length === 0) {
      return true;
    }

    const toDisk = toRod[toRod.length - 1];
    const fromRod = state.rods[command.from];
    const fromDisk = fromRod[fromRod.length - 1];

    // if(fromDisk smaller than toDisk) {
    if (fromDisk.disk > toDisk.disk) {
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
