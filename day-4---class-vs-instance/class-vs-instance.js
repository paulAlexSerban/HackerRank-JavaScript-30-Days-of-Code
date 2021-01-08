class Person {
  constructor(initialAge) {
    this.initialAge = initialAge;
    if (this.initialAge >= 0) {
      this.age = this.initialAge;
    } else {
      this.initialAge = 0;
      console.log("Age is not valid, setting age to 0.");
    }
  }

  amIOld() {
    if (this.initialAge < 13) {
      console.log("You are young.");
    } else if (this.initialAge >= 13 && this.initialAge < 18) {
      console.log("You are a teenager.");
    } else {
      console.log("You are old.");
    }
  };
  yearPasses() {
    this.initialAge = this.initialAge + 1;
  };
}