import Character from "./character.js";
import { logHtml } from "./view.js";

//Wizard
class Wizard extends Character {
  constructor(name) {
    super(name, 12, 40, 4);
  }
  //special Attack
  specialAttack(target) {
    if (this.mana >= 25) {
      this.mana -= 25;
      target.takeDamage(7);
      console.log(
        `${this.name} utilise FireBall pour 7 dégâts sur ${target.name}. Il lui reste ${target.hp}PV`,
      );
      logHtml(
        `${this.name} utilise FireBall pour 7 dégâts sur ${target.name}. Il lui reste ${target.hp}PV`,
      );
    } else {
      console.log(`${this.name} n'as pas la mana pour lancer FireBall.`);
      logHtml(`${this.name} n'as pas la mana pour lancer FireBall.`);
    }
  }
}

export default Wizard;
