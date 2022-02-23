"use strict";

// console.log(1);
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);


// простые типы

// let number = 4; числа

// console.log(4/0);
// console.log('string' * 4);

// const person = 'Alex';  строки, обязательно в кавычках, могут даже записываться с числами но в кавычках '5'

// const bool = true; булиновые значения либо да либо нет  true/ false

// console.log(something); это простое значение null, то есть объекта не существует

// let und
// console.log(und); это undefind, так как коробка внутри пуста

// Объекты

// const obj = {
//     name: 'John',
//     age: '25',
//     isMarried: false
// };

// console.log(obj.name);
// console.log(obj['name']);

// массивы

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = +prompt('Вам есть 18', '18'); плюс делает ответ числом а не строокойю по умолчанию ответ - строка и 10 

// + 5 будет 105
// // console.log(answer);
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// document.write(answers);

// const category = 'toys';

// console.log(`http://someurl.com/${category}/5`);
// console.log('http://someurl.com/' + category);

// const user = 'Ivan';

// alert(`Hi, ${user}`);

Конкатинация

console.log('arr' + ' - object'); складываем строки
console.log(4 + ' - object'); складываем число плюс строку
console.log(4 + + ' - object'); результат NaN так как мы выполняем действие которое не подлежит математической логике
console.log(4 + +'5'); результат 9, так как уже складываем числа, даже если в форме строки
+ унарный плюс - тот что ставится перед чем то

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

Результат 11 и 9 так как ++ после incr увеличивает на 1, а минус после decr уменьшает на 1.
Тоже самое работает и для 
++incr;
--decr; даст тот же результат 11 и 9

console.log(++incr);
console.log(--decr); даст тот же результат 11 и 9

console.log(5%2); получим 1

= один знак присваиваивание
== знак сравнения
=== строгое сравнение

console.log(2*4 == 8); получаем true, так как это действительное буллиновое значение правая часть равна левой
console.log(2*4 == '8'); получаем true, даже не смотря на то что это строка
console.log(2*4 === '8'); получаем false

&& и
|| или
! отрицание
const isChecked = true,
      isClosed = true;

console.log(isChecked || isClosed); получаем true так как одно из условий выполняется либо одно либо другое

const isChecked = false,
      isClosed = false;

console.log(isChecked || !isClosed); получаем true так как одно из условий выполняется

console.log(2 + 2 * 2 === 8); false так как приоритет у оператора умножения