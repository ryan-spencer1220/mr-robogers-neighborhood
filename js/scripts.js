// Business Logic
function beepBoop(num) {
  let numberArray = Array.from(num.toString()).map(Number);
  let robotArray = [];
  for (let i = 0; i <= num; i++) {
    const index = i.toString();
    const name = $("input#name").val();
    if (index.includes(3)) {
      robotArray.push(`"Won't you be my neighbor ` + name + `?"`);
    } else if (index.includes(2)) {
      robotArray.push('"Boop!"');
    } else if (index.includes(1)) {
      robotArray.push('"Beep!"');
    } else if (i < num) {
      robotArray.push(i);
    } else robotArray.push(i);
  }
  return robotArray.join(", ");
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
