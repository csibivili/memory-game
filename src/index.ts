import { Board } from './Board';

const board = new Board();
board.initialize();

document.getElementById('shuffle').addEventListener('click', () => {
  board.reorder();
});

document.getElementById('flip').addEventListener('click', () => {
  board.flip();
});
