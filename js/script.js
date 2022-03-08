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

// Конкатинация

// console.log('arr' + ' - object'); складываем строки
// console.log(4 + ' - object'); складываем число плюс строку
// console.log(4 + + ' - object'); результат NaN так как мы выполняем действие которое не подлежит математической логике
// console.log(4 + +'5'); результат 9, так как уже складываем числа, даже если в форме строки
// + унарный плюс - тот что ставится перед чем то

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);

// Результат 11 и 9 так как ++ после incr увеличивает на 1, а минус после decr уменьшает на 1.
// Тоже самое работает и для 
// ++incr;
// --decr; даст тот же результат 11 и 9

// console.log(++incr);
// console.log(--decr); даст тот же результат 11 и 9

// console.log(5%2); получим 1

// = один знак присваиваивание
// == знак сравнения
// === строгое сравнение

// console.log(2*4 == 8); получаем true, так как это действительное буллиновое значение правая часть равна левой
// console.log(2*4 == '8'); получаем true, даже не смотря на то что это строка
// console.log(2*4 === '8'); получаем false

// && и
// || или
// ! отрицание
// const isChecked = true,
//       isClosed = true;

// console.log(isChecked || isClosed); получаем true так как одно из условий выполняется либо одно либо другое

// const isChecked = false,
//       isClosed = false;

// console.log(isChecked || !isClosed); получаем true так как одно из условий выполняется

// console.log(2 + 2 * 2 === 8); false так как приоритет у оператора умножения

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// ? - тернарный оператор
// (num === 50) ? console.log('Ok!') : console.log('Error');

// const num = 50;

// switch (num) {
//     case 49:
//         console.log('Неверно');
//         break;
//     case 100:
//         console.log('Неверно');
//         break;
//     case 50:
//         console.log('В точку!');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;

// };

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;

    }
    
    personalMovieDB.movies[a] = b;



}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');

} else if (personalMovieDB.count >= 30) (
    console.log('Вы киноман');
) else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

let num = 20;

function showFirstMessage (text) {
    console.log (text);
    num = 10;
}

showFirstMessage ("Hello world!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log (calc(4, 3));
console.log (calc(5, 6));
console.log (calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log("Hello");
}

logger();
Стрелочные функции

const calc = (a, b) => a + b; 

const calc = (a, b) => { return a + b }; 



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};




function rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', ''),
                  b = prompt('На сколько оцените его', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
        
            }

}

rememberMyFilms();

function detectMyLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    
    } else if (personalMovieDB.count >= 30) (
        console.log('Вы киноман');
    ) else {
        console.log('Произошла ошибка');
    }
}

detectMyLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt('Ваш любимый жанр под номером ${i}');
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();


    personalMovieDB.movies[a] = b;