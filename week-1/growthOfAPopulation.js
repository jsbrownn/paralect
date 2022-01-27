// function nbYear(p0, percent, aug, p) {
//   if (p0 > 0 && p > 0 && percent > 0 && Number.isInteger(aug)) {
//     let years = 0;

//     while (p0 <= p) {
//       p0 = ((p0 / 100) * percent + aug + p0)
//       years++
//     }
//     return years;
//   } else {
//     return false;
//   }
// }

// пробовал делать с проверками на валидность параметров, какой-то один тест не проходил ( 100 прошел, один нет),
// не могу посмотреть что там за параметры
// без проверок все работает


function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p0 < p) {
    p0 = ((p0 / 100) * percent + aug + p0)
    years++
  }
  return years;
}


console.log(nbYear(1500, 0.5, 100, 5000), 15)

// https://www.codewars.com/kata/563b662a59afc2b5120000c6
// expected:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
