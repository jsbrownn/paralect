// link: https://learn.javascript.ru/object

// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false


function isEmpty(obj) {
  let isEmpty = true;
  for (let prop in obj) {
    isEmpty = false;
  }
  return isEmpty;
}

let schedule = {};
console.log(isEmpty(schedule))
schedule.word = "word";
console.log(isEmpty(schedule))