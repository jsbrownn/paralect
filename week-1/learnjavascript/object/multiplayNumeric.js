// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// // до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// multiplyNumeric(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };



function multiplyNumeric(obj) {
  for( let prop in obj){
    if( typeof obj[prop] === "number"){
      obj[prop] = obj[prop] * 2;
    }
  }
}
console.log(menu)
multiplyNumeric(menu)
console.log(menu, 'is multiplied')