function processData(input) {
  let tempArray = input.split("\n");
  let entriesLength = tempArray.splice(0, 1);
  let queries = tempArray.splice(entriesLength);

  for (let i = 0; i < entriesLength; i++) {
    tempArray[i] = tempArray[i].split(" ");
  }

  const phoneBookMap = new Map(tempArray);

  for (let i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) { 
      console.log(`${queries[i]} = ${phoneBookMap.get(queries[i])}`);
    } else {
      console.log(`Not found`);
    }
  }
}