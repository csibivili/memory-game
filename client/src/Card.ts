export class Card {
  private flipped: boolean = false;
  private card: HTMLDivElement = null;

  constructor(card: HTMLDivElement) {
    this.card = card;
  }

  setOrder(order: number): void {
    this.card.style.order = String(order);
  }

  setImage(index: number): void {
    const cardBack: HTMLDivElement = this.card.querySelector('.flip-card-back');
    cardBack.style.backgroundImage = `url(assets/${Math.round(index / 2)}.jpg)`;
  }

  flip(): void {
    this.flipped = !this.flipped;
    if (this.flipped) {
      this.card.classList.add('flipped');
    } else {
      this.card.classList.remove('flipped');
    }
  }

  getFlipped(): boolean {
    return this.flipped;
  }
}
