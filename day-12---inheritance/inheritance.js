class Student extends Person {
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id)
    this.scores = scores
  }

  calculate() {
    let averageScore = this.scores.reduce(this.getSum) / this.scores.length;

    if (averageScore >= 90) {
      return 'O';
    } else if (averageScore >= 80) {
      return 'E';
    } else if (averageScore >= 70) {
      return 'A';
    } else if (averageScore >= 55) {
      return 'P';
    } else if (averageScore >= 40) {
      return 'D';
    } else {
      return 'T';
    }

  }

  getSum(total, num) {
    return total + num
  }
}
