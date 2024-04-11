import Character from "./character.js";
// Barbarian
class Barbarian extends Character {
  constructor(name) {
    super(name, 14, 30, 3);
  }
  //special Attack
  specialAttack() {
    if (this.mana >= 15) {
      this.mana -= 15;
      this.reduceDmgTaken += 3;
      console.log(
        `${this.name} utilise Defense et gagne 3 points de reduction de dégats.`,
      );
    } else {
      console.log(`${this.name} n'as pas la mana pour lancer Defense.`);
    }
  }
  takeDamage(damage) {
    let rdamage = damage - this.reduceDmgTaken;
    if (rdamage < 0) {
      rdamage = 0;
    }
    this.hp -= rdamage;
    this.reduceDmgTaken = damage;
    if (this.hp <= 0) {
      this.status = "loser";
    }
  }
  dealDamage(target) {
    target.takeDamage(this.dmg);
    console.log(
      `${this.name} attaque ${target.name} et lui inflige ${this.dmg} points dégâts. ${target.name} lui reste ${target.hp} points de vie.`,
    );
  }
}
export default Barbarian;
