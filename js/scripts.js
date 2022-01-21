// Business Logic
function robogerReturn(num) {
  let numberArray = Array.from(num.toString()).map(Number);
  let robotArray = [];
  numberArray.forEach(function (num) {
    if (num === 1) {
      robotArray.push("Beep!");
    }
    console.log(robotArray);
  });
}

console.log(robogerReturn(123456));

// UI Logic

// if (num === 1) {
//     return "Beep!";
//   } else {
//     return num;
//   }
