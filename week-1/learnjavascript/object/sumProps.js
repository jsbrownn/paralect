// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

function getSumSalaries(obj) {
  let sum = 0;
  for (let salary in obj){
    sum += obj[salary]
  }
  return sum;
}

console.log(getSumSalaries(salaries))
salaries = {} //проверка на пустой обьект
console.log(getSumSalaries(salaries))
