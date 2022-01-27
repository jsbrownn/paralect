function  bitCounting(num){
  const binaryNum = num.toString(2)
  return binaryNum.split('').filter( i => i === '1' ).length
}

console.log(bitCounting(12))

// https://www.codewars.com/kata/526571aae218b8ee490006f4
// expected:
// The binary representation of 1234 is 10011010010, so the function should return 5 in this case