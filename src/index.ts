import { Game } from './Game';

const game = new Game();
game.initialize();

document.querySelector('button').addEventListener('click', () => {
  game.reorder();
});
