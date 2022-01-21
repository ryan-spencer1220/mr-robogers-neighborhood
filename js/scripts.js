// Business Logic
function robogerReturn(num) {
  let numberArray = Array.from(num.toString()).map(Number);
  for (let i = 0; i < num.length; i++) {
    if (num === "1") {
      numberArray.push("Beep!");
      return numberArray;
    } else {
      return numberArray;
    }
  }
}

console.log(robogerReturn(123456));

// UI Logic

// if (num === 1) {
//     return "Beep!";
//   } else {
//     return num;
//   }
