const cardElement: HTMLDivElement = document.querySelector('.card');

for (let index: number = 0; index < 15; index++) {
  const clone: Node = cardElement.cloneNode(true);
  document.getElementById('game-area').appendChild(clone);
}

const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card');
const order: number[] = new Array(16)
  .fill(0)
  .map((_, i) => ({ order: i + 1, sort: Math.random() }))
  .sort((a, b) => a.sort - b.sort)
  .map((n) => n.order);

for (let index: number = 1; index <= cards.length; index += 2) {
  const card1: HTMLDivElement = cards[index - 1];
  card1.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;
  card1.style.order = String(order[index - 1]);
  const card2: HTMLDivElement = cards[index];
  card2.style.backgroundImage = `url(../dist/assets/${Math.round(index / 2)}.jpg)`;
  card2.style.order = String(order[index]);
}
