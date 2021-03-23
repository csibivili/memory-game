export default class Game {
  static pictures = [];
  static setOrder(cardIds) {
    this.pictures = new Array(16)
      .fill(0)
      .map((_, i) => ({ order: i, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((o, i) => ({ order: o.order, cardId: cardIds[i], pictureId: Math.round((i + 1) / 2) }));
  }
  static getOrderById(order) {
    return this.pictures.find((p) => p.order === Number(order));
  }
}
