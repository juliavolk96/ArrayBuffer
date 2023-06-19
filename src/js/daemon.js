/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import Character from './character';

class Daemon extends Character {
  set distance(value) {
    if (value > 4) {
      this._distance = 4;
    } else {
      this._distance = value;
    }
  }

  get distance() {
    return this._distance;
  }
}

export default Daemon;
