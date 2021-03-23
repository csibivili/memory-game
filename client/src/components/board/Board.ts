import { Game } from '../../services/Game';
import { Card, template } from '../card/Card';
import { IOccurance } from '../../interfaces/IOccurance';

import './board.css';

export class Board {
  private cards: Card[] = [];
  private board: HTMLElement = null;
  private game: Game;

  constructor(game: Game) {
    this.board = document.getElementById('board');
    this.game = game;
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

  checkPairs(): void {
    const flippedCards: Card[] = this.cards.filter((c) => c.getFlipped());
    let pair: IOccurance = {};
    for (const card of flippedCards) {
      if (!pair[card.getPictureId()]) {
        pair[card.getPictureId()] = 1;
      } else {
        pair[card.getPictureId()]++;
      }
    }
    for (const [key, value] of Object.entries(pair)) {
      if (value === 2) {
        flippedCards.filter((c) => c.getPictureId() === Number(key)).forEach((c) => c.setFound());
      }
    }
    this.game.restrictStep();
    setTimeout(() => {
      this.flipCards();
      this.game.allowStep();
    }, 2000);
  }

  flipCards(): void {
    this.cards
      .filter((c) => !c.getFound() && c.getFlipped())
      .forEach((c) => {
        c.flip();
      });
  }

  private renderCards(): void {
    for (let index: number = 0; index < 16; index++) {
      this.board.appendChild(this.htmlToElement(template()));
    }
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.flip-card');
    cards.forEach((c, i) => {
      this.cards.push(new Card(c, i, this.game));
    });
  }

  private htmlToElement(html: string): Node {
    var template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
}
