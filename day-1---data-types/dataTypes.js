function dayOne_dataTypes(strToInt, float, str) {
    let i = 4;
    let d = 4.0;
    let s = "HackerRank ";
    // Declare second integer, double, and String variables.
    let int, double, string;

    // Read and save an integer, double, and String to your variables.
    int = parseInt(strToInt);
    double = parseFloat(float);
    string = str;

    // Print the sum of both integer variables on a new line.
    console.log(i + int);

    // Print the sum of the double variables on a new line.
    console.log((d + double).toFixed(1));

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + string);
}

dayOne_dataTypes("4", 10, "is the best");