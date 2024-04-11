import Character from "./character.js";

//Assassin
class Assassin extends Character {
  constructor(name) {
    super(name, 6, 20, 6);
    this.isProtected = false;
    this.protectionDamage = 0;
  }

  specialAttack() {
    if (this.mana >= 20) {
      this.mana -= 20;
      this.isProtected = true;
      this.protectionDamage = 7;
      console.log(
        `${this.name} utilise Shadow Hit, se protège de la prochaine attaque.`
      );
      return true;
    } else {
      console.log(`${this.name} n'a pas la mana pour lancer Shadow Hit.`);
      return false;
    }
  }

  takeDamage(damage) {
    if (this.isProtected) {
      this.isProtected = false;
      console.log(`${this.name} est protégé de la prochaine attaque.`);
      this.attackTarget(damage);
    } else {
      super.takeDamage(damage);
    }
  }

  attackTarget(damage) {
    super.takeDamage(damage);
    console.log(
      `${this.name} inflige ${this.protectionDamage} dégâts à son attaquant.`
    );
    if (this.status !== "loser") {
      this.takeDamage(this.protectionDamage);
      console.log(`${this.name} subit ${this.protectionDamage} dégâts.`);
    }
    this.protectionDamage = 0;
  }
}

export default Assassin;
