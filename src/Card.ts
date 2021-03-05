export class Card {
  private flipped: boolean = false;
  private htmlElement: HTMLDivElement = null;

  constructor(htmlElement: HTMLDivElement) {
    this.htmlElement = htmlElement;
  }

  setOrder(order: number): void {
    this.htmlElement.style.order = String(order);
  }

  setImage(index: number): void {
    const cardBack: HTMLDivElement = this.htmlElement.querySelector('.flip-card-back');
    cardBack.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;
  }

  flip(): void {
    this.flipped = !this.flipped;
    if (this.flipped) {
      this.htmlElement.classList.add('flipped');
    } else {
      this.htmlElement.classList.remove('flipped');
    }
  }

  getFlipped(): boolean {
    return this.flipped;
  }
}
