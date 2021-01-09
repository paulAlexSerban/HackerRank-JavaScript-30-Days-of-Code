function main(n) {
  let binaries = n.toString(2).split('0');
  let max = Math.max(...binaries);
  console.log(max.toString().length);
}

main(34);