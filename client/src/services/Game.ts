import { Board } from '../components/board/Board';

export class Game {
  private totalNrOfSteps: number = 0;
  private canStep: boolean = true;

  private board: Board;

  constructor() {
    this.board = new Board(this);
    this.board.initialize();
  }

  getCanStep(): boolean {
    return this.canStep;
  }

  restrictStep(): void {
    this.canStep = false;
  }

  allowStep(): void {
    this.canStep = true;
  }

  increaseNrOfSteps(): void {
    this.totalNrOfSteps++;
    if (!(this.totalNrOfSteps % 2)) {
      this.board.checkPairs();
    }
  }
}
