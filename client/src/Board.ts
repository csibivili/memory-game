import { Card } from './Card';

export class Board {
  private cards: Card[] = [];
  private board: HTMLElement = null;

  constructor() {
    this.board = document.getElementById('board');
  }

  initialize(): void {
    this.renderCards();
    this.fillPhotosInRandomOrder();
    this.shuffle();
  }

  shuffle(): void {
    new Array(16)
      .fill(0)
      .map((_, i) => ({ order: i + 1, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .forEach((o, i) => this.cards[i].setOrder(o.order));
    const http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(JSON.parse(http.response));
      }
    };
    http.open('GET', 'http://localhost:5000/shuffle', true);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send();
  }

  flip(): void {
    this.cards.forEach((c) => c.flip());
  }

  private renderCards(): void {
    const cardElement: HTMLDivElement = document.querySelector('.flip-card');

    for (let index: number = 0; index < 15; index++) {
      const clone: Node = cardElement.cloneNode(true);
      this.board.appendChild(clone);
    }
  }

  private fillPhotosInRandomOrder(): void {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.flip-card');

    for (let index: number = 1; index <= cards.length; index += 2) {
      const card1: Card = new Card(cards[index - 1], index - 1);
      const card2: Card = new Card(cards[index], index);
      //card1.setImage(index);
      //card2.setImage(index);
      this.cards.push(card1);
      this.cards.push(card2);
    }
  }
}
