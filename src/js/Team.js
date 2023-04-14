export default class Team {
  constructor(...heroes) {
    this.players = heroes;
  }

  [Symbol.iterator]() {
    const self = this;
    const last = self.players.length;
    let current = 0;
    return {
      next() {
        const data = {
          done: current > last,
          value: self.players[current],
        };
        current += 1;
        return data;
      },
    };
  }
}
