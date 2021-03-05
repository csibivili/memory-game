import { Card } from './Card';

export class Game {
  initialize(): void {
    this.renderCards();
    this.fillPhotosInRandomOrder();
  }

  private renderCards(): void {
    const cardElement: HTMLDivElement = document.querySelector('.flip-card');

    for (let index: number = 0; index < 15; index++) {
      const clone: Node = cardElement.cloneNode(true);
      document.getElementById('game-area').appendChild(clone);
    }
  }

  private fillPhotosInRandomOrder(): void {
    const cards: NodeListOf<HTMLDivElement> = this.getCards();
    const order: number[] = new Array(16)
      .fill(0)
      .map((_, i) => ({ order: i + 1, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((n) => n.order);

    for (let index: number = 1; index <= cards.length; index += 2) {
      const card1: Card = new Card(cards[index - 1]);
      card1.setOrder(order[index - 1]);
      card1.setImage(index);

      const card2: Card = new Card(cards[index]);
      card2.setOrder(order[index]);
      card2.setImage(index);
    }
  }

  private getCards(): NodeListOf<HTMLDivElement> {
    return document.querySelectorAll('.flip-card');
  }
}
