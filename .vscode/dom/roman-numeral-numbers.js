function convertToRoman(num) {
  let roman = "";
  const romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  console.log(romanNumeral[4]);
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  console.log(numbers[4]);
  for (i = 0; i < numbers.length; i++) {
    while (num >= numbers[i]) {
      roman = roman + romanNumeral[i];
      num = num - numbers[i];
    }
  }
  return roman;
}

console.log(convertToRoman(100));
