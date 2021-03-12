class Game {
  static order = [];
  static setOrder() {
    this.order = new Array(16)
      .fill(0)
      .map((_, i) => ({ order: i + 1, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((o, i) => ({ order: o.order, pictureId: i }));
  }
  static getOrderById(id) {
    return this.order.find((o) => o.pictureId == id);
  }
}

module.exports = Game;
