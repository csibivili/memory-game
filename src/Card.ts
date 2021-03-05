export class Card {
  private flipped: boolean = false;
  private htmlElement: HTMLDivElement = null;

  constructor(htmlElement: HTMLDivElement) {
    this.htmlElement = htmlElement;
    this.addListener();
  }

  setOrder(order: number): void {
    this.htmlElement.style.order = String(order);
  }

  setImage(index: number): void {
    const cardBack: HTMLDivElement = this.htmlElement.querySelector('.flip-card-back');
    cardBack.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;
  }

  private addListener(): void {
    this.htmlElement.addEventListener('click', function () {
      this.classList.add('flipped');
    });
  }
}
