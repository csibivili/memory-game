import { Card } from '../card/Card';

import './board.css';

export class Board {
  private cards: Card[] = [];
  private board: HTMLElement = null;

  constructor() {
    this.board = document.getElementById('board');
  }

  initialize(): void {
    this.renderCards();
    this.shuffle();
  }

  shuffle(): void {
    const http = new XMLHttpRequest();
    http.onreadystatechange = () => {
      if (http.readyState == 4 && http.status == 200) {
        const response = JSON.parse(http.response);
        this.cards.forEach((c, i) => c.setOrder(response.order[i]));
      }
    };
    http.open('GET', '/api/shuffle', true);
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
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.flip-card');
    cards.forEach((c, i) => {
      this.cards.push(new Card(cards[i], i));
    });
  }
}
