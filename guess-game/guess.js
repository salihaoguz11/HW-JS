let RandomNumber = Math.floor(Math.random() * 100) + 1;
let min = 1;
let max = 100;

let attempts = 3;
document.getElementById("submitGuess").addEventListener("click", function () {
  const guess = document.getElementById("guess").value;
  if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  if (guess == RandomNumber) {
    alert("Congratulations");
  } else if (guess < RandomNumber) {
    min = guess;
    alert(
      `It's too low. Enter Your Number between ${min} - ${max} . You have ${attempts} left. `
    );
  } else {
    max = guess;
    alert(
      `It's too high. Enter Your Number between ${min} - ${max} . You have ${attempts} left. `
    );
  }
  attempts--;

  if (attempts === 0) {
    alert("Sorry your number was " + RandomNumber + ".");
    window.location.reload();
  }
});

console.log(RandomNumber);
