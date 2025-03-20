import tree from "./gameTree.js"
import readlineSync from 'readline-sync';

const start = () => {
  const game = {
    stage: 0
  }

  let player = {
    name: "",
    health: 10,
    inventory: [],
  }
  const username = readlineSync.question('Введите имя: ');
  console.log(`Здравствуйте, ${username}!`)
  player.name = username;

  while (player.health > 0) {
    for (; game.stage < 5;) {
      for (let dialog of tree[game.stage]) {
        console.log(dialog.preface);
        const answer = readlineSync.question(dialog.question);
        console.log(dialog.options[answer])
      }
    }
    console.log(`Поздравляем, вы прошли игру!`)
    return;
  }
  console.log(`Вы проиграли`);
}

start()