import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
  return new Promise((resolve) => {
    const pressedKeys = {};
    document.addEventListener('keydown', (e) => {
      pressedKeys[e.code] = true;
    });
    document.addEventListener('keyup', (e) => {
      pressedKeys[e.code] = false;
    });

    if (pressedKeys[controls.PlayerOneAttack] && pressedKeys[controls.PlayerTwoBlock]) {
      const damage = getDamage(firstFighter, secondFighter);
      secondFighter.health -= damage;
    } else if (pressedKeys[controls.PlayerTwoAttack] && pressedKeys[controls.PlayerOneBlock]) {
      const damage = getDamage(secondFighter, firstFighter);
      firstFighter.health -= damage;
    } else if (pressedKeys[controls.PlayerOneAttack] && !pressedKeys[controls.PlayerTwoBlock]) {
      const damage = getHitPower(firstFighter);
      secondFighter.health -= damage;
    } else if (pressedKeys[controls.PlayerTwoAttack] && !pressedKeys[controls.PlayerOneBlock]) {
      const damage = getHitPower(secondFighter);
      firstFighter.health -= damage;
    }

    if (firstFighter.health > 0 && secondFighter.health <= 0) {
      resolve(firstFighter);
    } else if (firstFighter.health <= 0 && secondFighter.health > 0) {
      resolve(secondFighter);
    }
  });
}

export function getDamage(attacker, defender) {
  // return damage
  const damage = getHitPower(attacker) - getBlockPower(defender);
  return damage > 0 ? damage : 0;
}

export function getHitPower(fighter) {
  // return hit power
  return fighter.attack * (Math.random() + 1);
}

export function getBlockPower(fighter) {
  // return block power
  return fighter.defense * (Math.random() + 1);
}
