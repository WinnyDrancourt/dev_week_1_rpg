// Character
class Character {
  constructor(name, hp, mana, dmg) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.dmg = dmg;
    this.status = "playing";
    this.maxHp = hp;
    this.maxMana = mana;
    this.reduceDmgTaken = 0;
  }
  takeDamage(damage) {
    this.hp -= damage - this.reduceDmgTaken;
    this.reduceDmgTaken = 0;
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

export default Character;
