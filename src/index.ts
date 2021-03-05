const cardElement: HTMLDivElement = document.querySelector('.card');

for (let index: number = 0; index < 15; index++) {
  const clone: Node = cardElement.cloneNode(true);
  document.getElementById('game-area').appendChild(clone);
}

const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card');

for (let index: number = 1; index <= cards.length; index += 2) {
  cards[index - 1].style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;
  cards[index].style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;
}
