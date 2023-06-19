/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

import Character from './character';

class Magician extends Character {
  set distance(value) {
    if (value > 5) {
      this._distance = 5;
    } else {
      this._distance = value;
    }
  }

  get distance() {
    return this._distance;
  }
}

export default Magician;
