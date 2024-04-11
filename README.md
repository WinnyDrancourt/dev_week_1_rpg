Rpg Game en Javascript
Nous allons faire un jeu où le joueur pourra combattre 5 personnages jusqu'à la mort, façon gladiateurs. Chaque personnage aura des caractéristiques qui lui sont propres.

Les classes

1. Fighter
   Le Fighter commence avec 12 points de vie (hp) et 40 points de mana (mana). Il a 4 points de dégât (dmg).
   Le Fighter aura une attaque spéciale Dark Vision, infligeant 5 dégâts. Lors du prochain tour, il prendra 2 dégâts de moins par coup reçu. Elle coute 20 mana.

2. Paladin
   Le Paladin commence avec 16 points de vie et 160 points de mana. Il a 3 points de dégât.
   Le Paladin aura une attaque spéciale Healing Lighting, infligeant 4 dégâts et le soignant de 5. Elle coute 40 mana.

3. Monk
   Le Monk commence avec 8 points de vie et 200 points de mana. Il a 2 points de dégât.
   Le Monk, quand a lui, aura une attaque spéciale heal rendant 8 pv. Elle coute 25 mana.

4. Berzerker
   Le Berzerker commence avec 8 points de vie et 0 points de mana. Il a 4 points de dégât.
   Le Berzerker aura une attaque spéciale Rage lui donnant +1 attaque pour tout le reste de la partie mais lui enlevant 1 hp. Elle coûte 0 mana.

5. Assassin
   L'Assassin commence avec 6 points de vie et 20 points de mana. Il a 6 points de dégât.
   L'Assassin aura une attaque spéciale Shadow hit lui permettant de ne pas prendre de dégâts lors du prochain tour. Il portera alors une attaque spéciale infligeant 7 dégâts puis, si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour. Cette attaque coûte 20 mana.

6. Wizard
   Le Wizard commence avec 10 points de vie et 200 points de mana. Il a 2 points de dégat.
   Le Wizard aura une attaque speciale FireBall qui inflige 7 points de dégat et qui coute 25 mana.

7. Barbarian
   Le Barabarian commence avec 10 points de vie et 200 points de mana. Il a 2 points de dégat.
   Le Barbarian aura une attaque speciale Protection qui le protege des points de degat qu'il recoit. Cette valeur diminue de nombre de point de degats recut.
