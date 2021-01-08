function solve(mealCost, tipPercent, taxPercent) {
  //total cost equation basic maths
  const TOTAL_COST = mealCost + (tipPercent * mealCost / 100) + (taxPercent * mealCost / 100)

  //rounding the value to the nearest integer using Math.round
  const ROUNDED_COST = Math.round(TOTAL_COST)

  console.log(ROUNDED_COST)
}

solve(120, 5, 16)