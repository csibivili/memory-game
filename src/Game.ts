import { Card } from './Card';

export class Game {
  static nrOfFlippedCards: number = 0;
  private cards: Card[] = [];
  private area: HTMLElement = document.getElementById('game-area');

  initialize(): void {
    this.renderCards();
    this.fillPhotosInRandomOrder();
  }

  reorder(): void {
    const newOrder: number[] = this.getRandomOrder();
    for (let index: number = 1; index <= this.cards.length; index += 2) {
      this.cards[index - 1].setOrder(newOrder[index - 1]);
      this.cards[index].setOrder(newOrder[index]);
    }
  }

  private renderCards(): void {
    const cardElement: HTMLDivElement = document.querySelector('.flip-card');

    for (let index: number = 0; index < 15; index++) {
      const clone: Node = cardElement.cloneNode(true);
      this.area.appendChild(clone);
    }
  }

  private fillPhotosInRandomOrder(): void {
    const cards: NodeListOf<HTMLDivElement> = this.getCards();
    const order: number[] = this.getRandomOrder();

    for (let index: number = 1; index <= cards.length; index += 2) {
      const card1: Card = new Card(cards[index - 1], this.area);
      card1.setOrder(order[index - 1]);
      card1.setImage(index);

      const card2: Card = new Card(cards[index], this.area);
      card2.setOrder(order[index]);
      card2.setImage(index);

      this.cards.push(card1);
      this.cards.push(card2);
    }
  }

  private getRandomOrder(): number[] {
    return new Array(16)
      .fill(0)
      .map((_, i) => ({ order: i + 1, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((n) => n.order);
  }

  private getCards(): NodeListOf<HTMLDivElement> {
    return document.querySelectorAll('.flip-card');
  }
}
