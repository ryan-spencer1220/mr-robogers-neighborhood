// Business Logic
function beepBoop(num) {
  let numberArray = Array.from(num.toString()).map(Number);
  let robotArray = [];
  if (numberArray.includes(3)) {
    return "Won't you be my neighbor?";
  } else if (numberArray.includes(2)) {
    return "Boop";
  } else if (numberArray.includes(1)) {
    return "Beep!";
  } else if (!numberArray.includes(1, 2, 3))
    for (let i = 0; i < num + 1; i++) {
      if (i === 1) {
        robotArray.push("Beep!");
      } else if (i === 2) {
        robotArray.push("Boop!");
      } else if (i === 3) {
        robotArray.push("Won't you be my neighbor?");
      } else {
        robotArray.push(i);
      }
    }
  return robotArray;
}

console.log(beepBoop(321));

// UI Logic

// if (num === 1) {
//     return "Beep!";
//   } else {
//     return num;
//   }

// numberArray.forEach(function (num) {
// if (numberArray.includes(1)) {
//     robotArray.splice("Beep!");
//   }
//   console.log(robotArray);
// });
