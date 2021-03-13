export default class Game {
  static pictures = [];
  static setOrder() {
    this.pictures = new Array(16)
      .fill(0)
      .map((_, i) => ({ order: i + 1, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((o, i) => ({ order: o.order, pictureId: i }));
  }
  static getOrderById(id) {
    return this.pictures.find((o) => o.pictureId == id);
  }
}
