import { Card, template } from '../card/Card';

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
    http.onload = () => {
      //start game
    };
    http.open('POST', '/api/shuffle', true);
    http.setRequestHeader('Content-Type', 'application/json');
    http.send(JSON.stringify({ cardIds: this.cards.map((c) => c.getId()) }));
  }

  flip(): void {
    this.cards.forEach((c) => c.flip());
  }

  private renderCards(): void {
    for (let index: number = 0; index < 16; index++) {
      this.board.appendChild(this.htmlToElement(template()));
    }
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.flip-card');
    cards.forEach((c, i) => {
      this.cards.push(new Card(c, i));
    });
  }

  private htmlToElement(html: string): Node {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }
}
