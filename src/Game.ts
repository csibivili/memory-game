export class Game {
  initialize(): void {
    this.renderCards();
    this.fillPhotosInRandomOrder();
  }

  renderCards(): void {
    const cardElement: HTMLDivElement = document.querySelector('.flip-card');

    for (let index: number = 0; index < 15; index++) {
      const clone: Node = cardElement.cloneNode(true);
      document.getElementById('game-area').appendChild(clone);
    }
  }

  fillPhotosInRandomOrder(): void {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.flip-card');
    const order: number[] = new Array(16)
      .fill(0)
      .map((_, i) => ({ order: i + 1, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((n) => n.order);

    for (let index: number = 1; index <= cards.length; index += 2) {
      const card1: HTMLDivElement = cards[index - 1];
      const card1Back: HTMLDivElement = card1.querySelector('.flip-card-back');
      card1Back.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;
      card1.style.order = String(order[index - 1]);

      const card2: HTMLDivElement = cards[index];
      const card2Back: HTMLDivElement = card2.querySelector('.flip-card-back');
      card2Back.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;
      card2.style.order = String(order[index]);
    }
  }
}
