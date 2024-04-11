import Character from "./character.js";
import { logHtml } from "./view.js";
// Barbarian
class Barbarian extends Character {
  constructor(name) {
    super(name, 14, 30, 3);
    this.damageReductionTurns = 10;
  }
  //special Attack
  specialAttack() {
    if (this.mana >= 15) {
      this.mana -= 15;
      this.damageReduction += 3;
      console.log(
        `${this.name} utilise Defense et gagne 3 points de reduction de dégats.`,
      );
      logHtml(
        `${this.name} utilise Defense et gagne 3 points de reduction de dégats.`,
      );
    } else {
      console.log(`${this.name} n'as pas la mana pour lancer Defense.`);
      logHtml(`${this.name} n'as pas la mana pour lancer Defense.`);
    }
  }
}
export default Barbarian;
