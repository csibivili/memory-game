import { Board } from './Board';

const board = new Board();
board.initialize();

document.getElementById('shuffle').addEventListener('click', () => {
  board.shuffle();
});

document.getElementById('flip').addEventListener('click', () => {
  board.flip();
});
