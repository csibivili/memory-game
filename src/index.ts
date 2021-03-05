const cardElement: HTMLDivElement = document.querySelector('.card');

for (let index: number = 0; index < 15; index++) {
  const clone: Node = cardElement.cloneNode(true);
  document.getElementById('game-area').appendChild(clone);
}

const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card');

for (const card of cards) {
  card.style.backgroundImage = 'url(../dist/assets/1.jpg)';
}
