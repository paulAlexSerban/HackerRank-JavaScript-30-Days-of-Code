class Calculator {
  constructor(n) {
    this.summ = 0;
    this.ans = [];
    this.divisorSum(this.n);
  }

  range(start, end) {
    for (let i = start; i <= end; i++) {
        this.ans.push(i);
    }
    return this.ans;
}

  divisorSum(n) {
    for (let i in this.range(1, n)) {
      if(n % i === 0) {
        this.summ += i;
        return this.summ
      }
    }
  }
}

const calculator = new Calculator;
console.log(calculator.divisorSum(1778));

  