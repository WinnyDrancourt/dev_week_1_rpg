import Character from "./character.js";
//Monk
class Monk extends Character {
  constructor(name) {
    super(name, 8, 200, 2);
  }
  //special Attack
  specialAttack() {
    if (this.mana >= 25) {
      this.mana -= 25;
      let healAmount = 5;
      if (this.hp + healAmount > this.maxHp) {
        healAmount = this.maxHp - this.hp;
      }
      this.hp += healAmount;
      console.log(
        `${this.name} utilise Heal, et se soigne de ${healAmount} points de vie.`
      );
    } else {
      console.log(`${this.name} n'as pas la mana pour lancer Heal.`);
    }
  }
}

export default Monk;
