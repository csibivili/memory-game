class Game {
  static order = [];
  static setOrder() {
    this.order = new Array(16)
      .fill(0)
      .map((_, i) => ({ order: i + 1, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map((o) => o.order);
  }
}

module.exports = Game;
