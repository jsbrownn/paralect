function Calculator() {
  this.read = (a,b) => {
    this.a = +a;
    this.b = +b;
    console.log( 'num1 =',this.a)
    console.log( 'num2 =',this.b)
    console.log('multiply =',this.mul())
    console.log('sum =',this.sum())
  };
  this.sum = () => {
    return this.a + this.b;
  };
  this.mul = () => {
    return this.a * this.b;
  }
}


let calc = new Calculator()
calc.read(2,4)
