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

  constructor(card: HTMLDivElement, id: number) {
    this.card = card;
    this.id = id;
    this.card.addEventListener('click', () => {
      const http = new XMLHttpRequest();
      http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
          const result = JSON.parse(http.response);
          if (!this.flipped) {
            this.setImage(result.pictureId + 1);
          }
          this.flip();
        }
      };
      http.open('GET', `/api/getOrderByPictureId/${this.id}`, true);
      http.setRequestHeader('Content-Type', 'application/json');
      http.send();
    });
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
