export class Card {
  private flipped: boolean = false;
  private card: HTMLDivElement = null;
  private id: number;
  private order: number;

  constructor(card: HTMLDivElement, id: number) {
    this.card = card;
    this.id = id;
    this.card.addEventListener('click', () => {
      this.flip();
      const http = new XMLHttpRequest();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(JSON.parse(http.response));
        }
      };
      http.open('GET', `http://localhost:5000/getOrderByPictureId/${this.id}`, true);
      http.setRequestHeader('Content-Type', 'application/json');
      http.send();
    });
  }

  setOrder(order: number): void {
    this.order = order;
    this.card.style.order = String(this.order);
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
