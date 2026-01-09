let btns = document.querySelector(".btns");
let display = document.querySelector(".display");
let num;
num = {
  value: "",
  id: "number",
};
function createbtns() {
  for (i = 1; i <= 9; i++) {
    btns.innerHTML += `
    <button class='number _${i}' id='number'>${i}</button>
    `;
  }
  btns.innerHTML += `
  
  <button class ='ope' style='grid-row : 1/2' id='ope' >+</button>
  <button class ='ope' style='grid-row : 2/3' id='ope'>-</button>
  <button class ='ope' style='grid-row : 3/4'id='ope'>*</button>
  <button class ='ope' style='grid-row : 4/5' id='ope'>/</button>
  
  
  <button id='equ'>=</button>
  <button class='number _0' id='number'>0</button>
  `;
}
createbtns();
function createdisplay() {
  for (i = 0; i < btns.children.length; i++) {
    btns.children[i].addEventListener("click", (e) => {
      if (e.target.id !== "equ") {
        if (
          (e.target.id == "number" && num.id == "number") ||
          (num.value !== "" && e.target.id !== num.id)
        ) {
          num.value += e.target.innerHTML;
          num.id = e.target.id;
          display.innerText = num.value;
        }
      }

      if (e.target.id == "equ") {
        display.innerHTML += "=" + eval(num.value + "*1");
        num.value = "";
        num.id = "number";
      }
    });
  }
}
createdisplay();
