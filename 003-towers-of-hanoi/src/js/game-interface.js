
const myGame = createGame({ disks: 3 }); // create a new game with 3 disks (default)

myGame.reset();

const result = myGame.move({ from: 0, to: 1 }); // true for a valid move, and false for an invalid move

const gameState = myGame.getState();
// =>
const test = {
  rods: [
    [ // first rod contains biggest 2 disks
      { disk: 0 }, // biggest disks
      { disk: 1 }, // intermediate disk
    ],
    [ // smallest disks on middle rod
      { disk: 2 }, // smalles disk
    ],
    [ // nothing on the right rod

    ],
  ],
  numberofDisks: 3,
  solved: false,
};
test.rods.length; // 3
test.rods[0].length; // 2
test.rods[0][1].disk; // 1

myGame.addListener((gameState) => {

});
