let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (clk of buttons) {
  clk.addEventListener("click", (i) => {
    btnTxt = i.target.innerText;
    if (btnTxt == "=") {
      screenValue = eval(screenValue);
      screen.value = screenValue;
      // screen.value = "It's " + screenValue;
    } else if (btnTxt == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (btnTxt == "X") {
      btnTxt = "*";
      screenValue += btnTxt;
      screen.value = screenValue;
    } else {
      screenValue += btnTxt;
      screen.value = screenValue;
    }
  });
}