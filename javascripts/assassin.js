import Character from "./character.js";
import { logHtml } from "./view.js";

//Assassin
class Assassin extends Character {
  constructor(name) {
    super(name, 6, 20, 6);
    this.protectionDamage = 7;
  }

  specialAttack() {
    if (this.mana >= 20) {
      this.mana -= 20;
      this.applyDamageReduction(1, this.dmg);
      console.log(
        `${this.name} utilise Shadow Hit, se protège lors du prochain tour.`,
      );
      logHtml(
        `${this.name} utilise Shadow Hit, se protège lors du prochain tour.`,
      );
    } else {
      console.log(`${this.name} n'a pas la mana pour lancer Shadow Hit.`);
      logHtml(`${this.name} n'a pas la mana pour lancer Shadow Hit.`);
    }
  }
}

export default Assassin;
