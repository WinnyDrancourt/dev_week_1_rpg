import Character from "./character.js";

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
        `${this.name} utilise FireBall sur ${target.name}, et inflige 7 dégâts.`
      );
    } else {
      console.log(`${this.name} n'as pas la mana pour lancer Dark-Vision.`);
    }
  }
}

export default Wizard;
