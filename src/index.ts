const cardElement = document.querySelector('.card');

for (let index: number = 0; index < 15; index++) {
  const clone = cardElement.cloneNode();
  document.getElementById('game-area').appendChild(clone);
}
