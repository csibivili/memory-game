import { Game } from '../../services/Game';
import './card.css';

export const template = () => `
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front"></div>
    <div class="flip-card-back"></div>
  </div>
</div>
`;

export class Card {
  private flipped: boolean = false;
  private found: boolean = false;

  private card: HTMLDivElement;
  private id: number;
  private order: number;
  private game: Game;
  private pictureId: number;

  constructor(card: HTMLDivElement, order: number, game: Game) {
    this.id = this.createRandomId();
    this.card = card;
    this.order = order;
    this.game = game;
    this.card.addEventListener('click', () => {
      if (!this.flipped && this.game.getCanStep()) {
        this.flip();
        if (!this.pictureId) {
          const http = new XMLHttpRequest();
          http.onload = () => {
            const result = JSON.parse(http.response);
            this.pictureId = result.pictureId;
            this.step();
          };
          http.open('GET', `/api/getPictureByOrder/${this.order}`, true);
          http.setRequestHeader('Content-Type', 'application/json');
          http.send();
        } else {
          this.step();
        }
      }
    });
  }

  getId(): number {
    return this.id;
  }

  getFlipped(): boolean {
    return this.flipped;
  }

  getPictureId(): number {
    return this.pictureId;
  }

  setFound(): void {
    this.found = true;
  }

  getFound(): boolean {
    return this.found;
  }

  setImage(index: number): void {
    const cardBack: HTMLDivElement = this.card.querySelector('.flip-card-back');
    cardBack.style.backgroundImage = `url(assets/${index}.jpg)`;
  }

  flip(): void {
    this.flipped = !this.flipped;
    if (this.flipped) {
      this.card.classList.add('flipped');
    } else {
      this.card.classList.remove('flipped');
    }
  }

  private createRandomId(): number {
    return Number(
      Math.floor(Math.random() * Date.now())
        .toString()
        .substring(0, 8)
    );
  }

  private step(): void {
    this.setImage(this.pictureId);
    this.game.increaseNrOfSteps();
  }
}
