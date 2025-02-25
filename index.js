import readlineSync from 'readline-sync';

const game = {
  stage: 0
}

const player = {
  name: "",
  inventory: [],

}

const username = readlineSync.question('Введите имя: ');
console.log(`Здравствуйте, ${username}!`)
player.name = username;
console.log("Ночью вы просыпаетесь от жуткого рева со стороны колледжа! Взошла кровавая луна, и коридоры учебного заведения заполонили зомби и вурдалаки, (и скелеты). Спасите alma mater от нашествия темных сил!");
console.log("У вас есть небольшой рюкзак. Что вы захватите с собой в освободительный поход?");
const option = readlineSync.question(`
  1. Фонарь
  2. Букварь
  3. Кабель
  4. Гитара
(Введите число, например: 1)
`);

const options1 = {
  1: "Фонарь",
  2: "Букварь",
  3: "Кабель",
  4: "Гитара",
}

player.inventory.push(options1[option]);
console.log(player);

console.log("Вы подходите к зданию колледжа и встречаете охранника");
console.log("Охранник: Стой! Тебе туда нельзя! Ты можешь пройти только если докажешь знание JavaScript!");
console.log("Скажи мне сколько есть способов объявить переменную в JavaScript?");

const option2 = readlineSync.question(`
  1: "3",
  2: "2",
  3: "Атаковать охранника",
  4: "Если ты охранник, то почему ты не воюешь с нежитью?"
  `
);

const guardDialog = {
  1: "Верно! Проходи",
  2: "Неверно!\n Охранник атакует вас первым!",
  3: "Вы получаете преимущество инициативы и атакуете первым",
  4: "Лицо охранника приобретает серый оттенок и вы видите как вам показался скелет"
}

console.log(guardDialog[option2])


