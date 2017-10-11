console.log('this will be towers of hanoi - the game');

const newGame = createGame({ disks: 3 });

newGame.getState(); // =>
// {
//   rods: [[{
//     nr: 0
//   }, {
//     nr: 1
//   }, {
//     nr: 2
//   }], [], []]
// }

const success = newGame.move({ from: 0, to: 1 });

// {
//   rods: [[{
//     nr: 0
//   }, {
//     nr: 1
//   }], [{
//     nr: 2
//   }], []]
// }

newGame.reset({ disks: 3 });

newGame.addListener(newState => console.log(newState));
