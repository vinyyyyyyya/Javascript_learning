let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("rstbtn");
resetBtn.disabled=true;
resetBtn.style.opacity="0.5"
let turno = true;
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      box.setAttribute("disabled", true);
      turno = false;
    } else {
      box.innerText = "X";
      box.setAttribute("disabled", true);
      turno = true;
    }

    checkWinner();
  });
});

const checkWinner = () => {
  for (const pattern of winningPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    if (pos1 && pos2 && pos3) {
      if (pos1 === pos2 && pos2 === pos3) {
        resetBtn.disabled=false;
        resetBtn.style.opacity="1"
        var winner = document.createElement("p");
        winner.innerText = `winner is ${pos1}`;
        winner.style.fontSize = "40px";
        winner.style.marginTop="20px"
        document.body.append(winner);
      }
    }
  }
};

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
});
