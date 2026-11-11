// ===== Пара 23: условия и циклы =====
// Задания 5–8. Если задачи 1–4 уже есть в вашем tasks.js,
// добавьте этот код В КОНЕЦ существующего файла, не удаляя прежние задачи.

// ===== Задача 5. Чётное или нечётное, знак числа =====
const number = 17;

if (number % 2 === 0) {
  console.log(number + ' — чётное');
} else {
  console.log(number + ' — нечётное');
}

if (number > 0) {
  console.log('Положительное');
} else if (number < 0) {
  console.log('Отрицательное');
} else {
  console.log('Ноль');
}

// Эксперимент с prompt (после проверки оставлен закомментированным).
// Чтобы проверить самостоятельно, временно уберите /* и */.
/*
const userNumber = Number(prompt('Введите целое число'));

if (Number.isNaN(userNumber)) {
  console.log('Это не число');
} else if (userNumber % 2 === 0) {
  console.log(userNumber + ' — чётное');
} else {
  console.log(userNumber + ' — нечётное');
}
*/

// ===== Задача 6. Оценка по баллам =====
const score = 78;
let mark;

if (score < 0 || score > 100) {
  console.log('Баллы должны быть от 0 до 100');
} else if (score >= 90) {
  mark = 5;
} else if (score >= 75) {
  mark = 4;
} else if (score >= 60) {
  mark = 3;
} else {
  mark = 2;
}

if (mark !== undefined) {
  console.log(`Баллов: ${score}, оценка: ${mark}`);
}

console.log(5 === '5'); // false: типы разные (число и строка)
console.log(5 == '5');  // true: == приводит строку к числу

// ===== Задача 7. День недели через switch =====
const dayNumber = 3;
let dayName;

switch (dayNumber) {
  case 1:
    dayName = 'понедельник';
    break;
  case 2:
    dayName = 'вторник';
    break;
  case 3:
    dayName = 'среда';
    break;
  case 4:
    dayName = 'четверг';
    break;
  case 5:
    dayName = 'пятница';
    break;
  case 6:
    dayName = 'суббота';
    break;
  case 7:
    dayName = 'воскресенье';
    break;
  default:
    dayName = 'такого дня нет';
}

console.log(`День ${dayNumber}: ${dayName}`);
const isWeekend = dayNumber === 6 || dayNumber === 7;
console.log('Выходной:', isWeekend);

// Дополнительный switch: номер месяца → время года.
const monthNumber = 11;
let season;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    season = 'зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'осень';
    break;
  default:
    season = 'такого месяца нет';
}

console.log(`Месяц ${monthNumber}: ${season}`);

// ===== Задача 8. Циклы =====
// Таблица умножения на 7 через for.
for (let i = 1; i <= 10; i++) {
  console.log(`7 × ${i} = ${7 * i}`);
}

// Сумма чисел от 1 до 5 через while.
const n = 5;
let sum = 0;
let k = 1;

while (k <= n) {
  sum += k; // то же самое, что sum = sum + k
  k++;
}
console.log(`Сумма чисел от 1 до ${n}: ${sum}`);

// continue пропускает 3; break останавливает цикл на 8.
for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  if (i === 8) {
    break;
  }
  console.log(i);
}

// Свой цикл: таблица умножения на счастливое число 8.
const luckyNumber = 8;
for (let i = 1; i <= 10; i++) {
  console.log(`${luckyNumber} × ${i} = ${luckyNumber * i}`);
}
