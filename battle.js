export default (player, enemy, turn) => {
  if (turn === 'player') {
    console.log(`Вы атакуете первым`)
  }
  const figures = {
    player: player,
    enemy: enemy
  }
  for (; figures[turn].health > 0;) {
    const attack = Math.round(Math.random() * 6);
    console.log(turn === 'player' ? `Ваша атака ${attack}` : `Вас атакует ${enemy.name}, вы получили урон: ${attack}`);
    figures[turn].health -= attack;
    turn === 'player' ? turn = 'enemy' : turn = 'player'
  }
  if (player.health > 0){
    return 'Вы победили'
  } return 'Вы проиграли'
}