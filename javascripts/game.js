import Fighter from "./fighter.js";
import Paladin from "./paladin.js";
import Monk from "./monk.js";
import Berzerker from "./berzerker.js";
import Assassin from "./assassin.js";
import Wizard from "./wizard.js";
import Barbarian from "./barbarian.js";
// Game

class Game {
  constructor() {
    this.turnLeft = 10;
    this.characters = this.createCharacters();
    this.user = this.characters[0];
  }
  createCharacters() {
    const characters = [];
    const characterNames = ["Grace", "Ulder", "Moana", "Draven", "Carl"];
    const characterClasses = [
      Fighter,
      Paladin,
      Monk,
      Berzerker,
      Assassin,
      Wizard,
      Barbarian,
    ];
    // personnage utilisateur
    let userName = prompt("Entrer votre pseudo :");
    let userClass = this.chooseClass(characterClasses);
    let userCharacter = new userClass(userName);
    characters.push(userCharacter);

    // personnage IA
    for (let i = 1; i < 5; i++) {
      let aiName = characterNames[i];
      let aiClass =
        characterClasses[Math.floor(Math.random() * characterClasses.length)];
      let aiCharacter = new aiClass(aiName);
      characters.push(aiCharacter);
    }
    return characters;
  }
  //Choix de class
  chooseClass(characterClasses) {
    console.log("Choisissez votre classe :");
    characterClasses.forEach((charClass, index) => {
      console.log(`${index + 1}. ${charClass.name}`);
    });
    let choice = prompt(
      `Entrez le numéro de votre classe (1-${characterClasses.length})`,
    );
    let classIndex = parseInt(choice) - 1;
    if (
      isNaN(classIndex) ||
      classIndex < 0 ||
      classIndex >= characterClasses.length
    ) {
      console.log("Choix invalide");
      this.chooseClass(characterClasses);
    }
    return characterClasses[classIndex];
  }

  // Logique de tours
  startTurn() {
    console.log(`Nous sommes au tour : ${11 - this.turnLeft}`);
    this.characters.forEach((char) => {
      if (char.status === "playing") {
        if (char === this.user) {
          this.userTurn();
        } else {
          this.aiTurn(char);
        }
      }
    });
    this.skipTurn();
  }

  userTurn() {
    console.log(`C'est vôtre tour, ${this.user.name}.`);
    let choice = prompt(
      "Entrez 1 pour voir les stats, 2 pour effectuer une attaque normal et 3 pour une attaque special",
    );
    if (choice === "1") {
      this.watchStats();
      this.userTurn();
    } else if (choice === "2") {
      let target = this.userTarget(this.user);
      this.user.dealDamage(target);
      if (target.status === "loser") {
        this.user.mana += 20;
        console.log(
          `${this.user.name} a gagné 20 points de mana pour avoir tué ${target.name}`,
        );
      }
    } else if (choice === "3") {
      if (
        this.user instanceof Monk ||
        this.user instanceof Assassin ||
        this.user instanceof Barbarian
      ) {
        this.user.specialAttack();
      } else {
        let target = this.userTarget(this.user);
        this.user.specialAttack(target);
        if (target.status === "loser") {
          this.user.mana += 20;
          console.log(
            `${this.user.name} a gagné 20 points de mana pour avoir tué ${target.name}`,
          );
        }
      }
    } else {
      console.log("Choix invalide, veuillez réessayer.");
      this.userTurn();
    }
  }

  aiTurn(char) {
    console.log(`C'est au tour de, ${char.name}.`);
    let target = this.getRandomTarget(char);

    let executeTarget = this.characters.find(
      (char) =>
        char.status === "playing" && char !== char && char.hp < char.dmg,
    );
    if (executeTarget.length > 0) {
      target = executeTarget[Math.floor(Math.random() * executeTarget.length)];
      console.log(`${char.name} a choisi d'executer ${target.name}`);
      char.dealDamage(target);
      if (target.status === "loser") {
        char.mana += 20;
        console.log(
          `${char.name} a gagné 20 points de mana pour avoir tué ${target.name}`,
        );
      }
    } else {
      if (Math.random() < 0.5) {
        console.log(
          `${char.name} effectue une attaque normale sur ${target.name}.`,
        );
        char.dealDamage(target);
        if (target.status === "loser") {
          char.mana += 20;
          console.log(
            `${char.name} a gagné 20 points de mana pour avoir tué ${target.name}`,
          );
        }
      } else {
        console.log(`${char.name} effectue une attaque spéciale.`);
        if (
          char instanceof Monk ||
          char instanceof Assassin ||
          char instanceof Barbarian
        ) {
          char.specialAttack();
          if (char.status === "loser") {
            char.mana += 20;
            console.log(
              `${char.name} a gagné 20 points de mana pour avoir tué ${char.name}`,
            );
          }
        } else {
          if (char.specialAttack(target)) {
            if (target.status === "loser") {
              char.mana += 20;
              console.log(
                `${char.name} a gagné 20 points de mana pour avoir tué ${target.name}`,
              );
            }
          }
        }
      }
    }
  }

  skipTurn() {
    this.turnLeft--;
    if (this.turnLeft === 0 || this.checkWinner()) {
      this.endGame();
    }
  }
  // Cible aleatoire
  getRandomTarget(character) {
    let targets = this.characters.filter(
      (char) => char.status === "playing" && char !== character,
    );
    return targets[Math.floor(Math.random() * targets.length)];
  }
  // choix de la cible pour le User
  userTarget(character) {
    let targets = this.characters.filter(
      (char) => char.status === "playing" && char !== character,
    );
    console.log("Choisissez votre cible :");
    targets.forEach((char, index) => {
      console.log(`${index + 1}. ${char.name}, PV = ${char.hp}/${char.maxHp}`);
    });
    let choice = prompt(`Entrez le numéro de la cible (1-${targets.length})`);
    let targetIndex = parseInt(choice) - 1;
    if (
      isNaN(targetIndex) ||
      targetIndex < 0 ||
      targetIndex >= targets.length
    ) {
      console.log("Choix invalide");
      this.userTarget(character);
    }
    return targets[targetIndex];
  }
  // Fin de partie
  endGame() {
    console.log("Fin du Jeu");
  }

  checkWinner() {
    let playingCharacters = this.characters.filter(
      (char) => char.status === "playing",
    );
    if (playingCharacters.length === 1) {
      console.log(`${playingCharacters[0].name} est le grand gagnant`);
      return true;
    }
    return false;
  }

  watchStats() {
    this.characters.forEach((char, index) => {
      if (char.status === "playing") {
        let charClass;
        if (char instanceof Fighter) {
          charClass = "Fighter";
        } else if (char instanceof Paladin) {
          charClass = "Paladin";
        } else if (char instanceof Monk) {
          charClass = "Monk";
        } else if (char instanceof Berzerker) {
          charClass = "Berzerker";
        } else if (char instanceof Assassin) {
          charClass = "Assassin";
        } else if (char instanceof Wizard) {
          charClass = "Wizard";
        } else if (char instanceof Barbarian) {
          charClass = "Barbarian";
        } else {
          charClass = "Unknown";
        }
        console.log(
          `${index + 1}. ${char.name} (${charClass}) : PV = ${char.hp}/${
            char.maxHp
          }, Mana = ${char.mana}/${char.maxMana}, Dmg = ${char.dmg}, Def = ${char.reduceDmgTaken}`,
        );
      } else {
        console.log(`${char.name} : Mort`);
      }
    });
  }
  startGame() {
    while (this.turnLeft > 0) {
      this.startTurn();
    }
  }
}

const game = new Game();
game.startGame();

/*  playTurn(character) {
    let target = this.getRandomTarget(character);
    console.log(`${character.name}, que voulez-vous faire ?`);

    let choice = prompt(
      "Entrez 1 pour une attaque normale ou 2 pour une attaque spéciale",
    );

    if (choice === "1") {
      character.dealDamage(target);
      if (target.status === "loser") {
        character.mana += 20;
        console.log(`${character.name} a gagné 20 mana.`);
      }
    } else if (choice === "2") {
      if (character.specialAttack(target)) {
        if (target.status === "loser") {
          character.mana += 20;
          console.log(`${character.name} a gagné 20 mana.`);
        }
      }
    } else {
      console.log("Choix invalide, vous passez votre tour.");
    }
  }
return characterNames.map((name) => {
  const randomIndex = Math.floor(Math.random() * characterClasses.length);
  const CharacterClass = characterClasses[randomIndex];
  return new CharacterClass(name);
});
*/
