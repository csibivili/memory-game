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
  private card: HTMLDivElement = null;
  private id: number;
  private order: number;

  constructor(card: HTMLDivElement, order: number) {
    this.card = card;
    this.id = this.createRandomId();
    this.order = order;
    this.card.addEventListener('click', () => {
      const http = new XMLHttpRequest();
      http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
          const result = JSON.parse(http.response);
          if (!this.flipped) {
            this.setImage(result.pictureId);
          }
          this.flip();
        }
      };
      http.open('GET', `/api/getPictureByOrder/${this.order}`, true);
      http.setRequestHeader('Content-Type', 'application/json');
      http.send();
    });
  }

  getId(): number {
    return this.id;
  }

  getFlipped(): boolean {
    return this.flipped;
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
}
