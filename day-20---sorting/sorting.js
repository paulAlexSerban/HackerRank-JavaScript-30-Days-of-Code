const main = () => {
  let n = parseInt(readLine());
  let a = readLine().split(' ');
  let a = a.map(Number);
  //returns number of swaps
  const bubbleSortAsc = () => {
    // Track number of elements swapped during a single array traversal
    let numberOfSwaps = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - 1; j++) {
        // Swap adjacent elements if they are in asc order
        if (a[j] > a[j + 1]) {
          //swap(a[j], a[j + 1]);
          let temp1 = a[j];
          let temp2 = a[j + 1];
          a[j] = temp2;
          a[j + 1] = temp1;

          numberOfSwaps++;
        }
      }

      // If no elements were swapped during a traversal, array is sorted
      if (numberOfSwaps == 0) {
        break;
      }
    }

    return numberOfSwaps;
  };

  //call the function sort and get number of swaps
  let swapNum = bubbleSortAsc();
  console.log("Array is sorted in " + swapNum + " swaps.");
  console.log("First Element: " + a[0]);
  console.log("Last Element: " + a[a.length - 1]);
}