// link: https://learn.javascript.ru/object-methods
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
  read(a,b){
    this.a = +a,
    this.b = +b
  },
  sum(){
    return this.a + this.b;
  },
  mul(){
    return this.a * this.b;
  }
}

calculator.read(2,5)
console.log('sum = ',calculator.sum())
console.log('multiply = ',calculator.mul())