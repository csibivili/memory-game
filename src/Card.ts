import { Game } from './Game';

export class Card {
  private flipped: boolean = false;
  private htmlElement: HTMLDivElement = null;
  private area: HTMLElement = null;

  constructor(htmlElement: HTMLDivElement, area: HTMLElement) {
    this.htmlElement = htmlElement;
    this.area = area;
    this.addListener();
  }

  setOrder(order: number): void {
    this.htmlElement.style.order = String(order);
  }

  setImage(index: number): void {
    const cardBack: HTMLDivElement = this.htmlElement.querySelector('.flip-card-back');
    cardBack.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;
  }

  flipBack(): void {
    if (this.flipped) {
      this.htmlElement.classList.remove('flipped');
    }
  }

  getFlipped(): boolean {
    return this.flipped;
  }

  private addListener(): void {
    this.htmlElement.addEventListener('click', () => {
      if (!this.flipped && Game.nrOfFlippedCards < 2) {
        this.htmlElement.classList.add('flipped');
        this.flipped = !this.flipped;
        Game.nrOfFlippedCards++;
        if (Game.nrOfFlippedCards >= 2) {
          const event = document.createEvent('Event');
          event.initEvent('flipback');
          this.area.dispatchEvent(event);
        }
      }
    });
  }
}
