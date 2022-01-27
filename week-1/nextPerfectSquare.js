function findNextSquare(sq){
    let sqrt = Math.sqrt(sq)
    if(Number.isInteger(sqrt)){
      return Math.pow(sqrt + 1, 2)
    } else {
      return -1;
    }
  }

console.log(findNextSquare(625));


// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// expected:
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square