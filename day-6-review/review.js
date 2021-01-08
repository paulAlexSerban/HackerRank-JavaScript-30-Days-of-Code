function processData(input) {
  let inputCopy = input.split('\n').slice(1);

  inputCopy.forEach((string) => {
    let evenString = '';
    let oddString = '';

    for (let i = 0; i < string.length; i++) {
      i % 2 ? oddString += string[i] : evenString += string[i];
    }

    console.log(`${evenString} ${oddString}`);
  });
}