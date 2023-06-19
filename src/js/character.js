/* eslint no-underscore-dangle: ["error", { "allowAfterThis": true }] */

class Character {
  constructor() {
    this.attackPower = 0;
    this.distance = 0;
    this.stoned = false;
  }

  set attackPower(value) {
    this._attackPower = value;
  }

  get attackPower() {
    return this._attackPower;
  }

  set distance(value) {
    if (value < 0) {
      throw new Error('Distance cannot be negative.');
    }
    this._distance = value;
  }

  get distance() {
    return this._distance;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get stoned() {
    return this._stoned;
  }

  get attack() {
    if (this.distance === 0) {
      return 0;
    }

    const attackDistanceModifier = 100 - (this.distance - 1) * 10;
    const attackPower = (this.attackPower * attackDistanceModifier) / 100;

    if (this.stoned) {
      const stonedAttack = attackPower - Math.log2(this.distance) * 5;
      return Math.round(stonedAttack);
    }

    return Math.round(attackPower);
  }
}

export default Character;
