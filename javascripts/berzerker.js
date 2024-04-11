import Character from "./character.js";
import { logHtml } from "./view.js";

//Berzerker
class Berzerker extends Character {
  constructor(name) {
    super(name, 8, 0, 4);
  }
  //special Attack
  specialAttack() {
    if (this.hp > 1) {
      this.hp -= 1;
      this.dmg++;
      console.log(`${this.name} utilise Rage, et augmente ces dégâts de 1.`);
      logHtml(`${this.name} utilise Rage, et augmente ces dégâts de 1.`);
    } else {
      console.log(
        `${this.name} ne veux pas se tuer pour gagner 1 points de dégâts supplementaire.`,
      );
      logHtml(
        `${this.name} ne veux pas se tuer pour gagner 1 points de dégâts supplementaire.`,
      );
    }
  }
}

export default Berzerker;
