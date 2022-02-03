// link: https://learn.javascript.ru/constructor-new

// ВАЖНО! для запуска этой задачи нужно открыть indexhtml на лайвсервере


// Напишите функцию-конструктор Accumulator(startingValue).
// Объект, который она создаёт, должен уметь следующее:
// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:

// let accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
// alert(accumulator.value); // выведет сумму этих значений



const Accumulator =   function(value){
  this.startingValue = value;
  this.value = value;
  this.read =function(){
    let num = + prompt('введите число',0)
    this.value += num
    console.log(this.value)
  }
}


let acc = new Accumulator(1);
acc.read()
acc.read()
acc.read()
acc.read()
acc.read()

