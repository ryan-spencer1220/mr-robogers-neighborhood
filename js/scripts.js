// Business Logic
function beepBoop(num) {
  let numberArray = Array.from(num.toString()).map(Number);
  console.log(numberArray);
  console.log(typeof numberArray[0]);
  let robotArray = [];
  for (let i = 0; i <= num; i++) {
    if (numberArray[i] === 3) {
      robotArray.push("Won't you be my neighbor?, ");
    } else if (numberArray.includes(2)) {
      robotArray.push("Boop!, ");
    } else if (numberArray.includes(1)) {
      robotArray.push("Beep!, ");
    } else if (i < num) {
      robotArray.push(i + ", ");
    } else {
      robotArray.push(i);
    }
  }
  return robotArray;
}

// UI Logic
$(document).ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const num = $("#number").val();
    const beepBoopMessage = beepBoop(num);
    $("#original-number").html(num);
    $("#beep-boop-message").html(beepBoopMessage);
  });
});

// let numberArray = Array.from(num.toString()).map(Number);
// let robotArray = [];
// if (numberArray.includes(3)) {
//   return "Won't you be my neighbor?";
// } else if (numberArray.includes(2)) {
//   return "Boop!";
// } else if (numberArray.includes(1)) {
//   return "Beep!";
// } else if (!numberArray.includes(1, 2, 3))
//   for (let i = 0; i <= num; i++) {
//     if (i === 1) {
//       robotArray.push("Beep!, ");
//     } else if (i === 2) {
//       robotArray.push("Boop!, ");
//     } else if (i === 3) {
//       robotArray.push("Won't you be my neighbor?, ");
//     } else if (i < num) {
//       robotArray.push(i + ", ");
//     } else {
//       robotArray.push(i);
//     }
//   }
// return robotArray;
// }
