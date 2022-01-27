const memo = {}
let counter = 0;

function factorial(num) {
  if(memo[num] || num ===1){
    return memo[num] ||  1
  } else {
    counter ++
    return memo[num] = num * factorial(num - 1)
  }
}

console.log(factorial(5),counter)
console.log(factorial(10),counter)
console.log(factorial(11),counter)
console.log(memo)