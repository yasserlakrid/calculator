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
    if (i == 3 || i == 6 || i == 9) {
      btns.innerHTML += "<br>";
    }
  }
  btns.innerHTML += `
  
  <button id='ope' >+</button>
  <button id='ope'>-</button>
  <button id='ope'>*</button>
  <button id='ope'>/</button>
  
  
  <button id='equ'>=</button>

  `;
}
createbtns();
function createdisplay() {
  for (i = 0; i < btns.children.length; i++) {
    btns.children[i].addEventListener("click", (e) => {
      console.log('the number id is ',num.id,' the event is ',e.target.id )
      if (e.target.id !== "equ") {
        if ((e.target.id == "number" && num.id == "number") || (num.value !=="" && (e.target.id !== num.id )) ) {
          num.value += e.target.innerHTML;
          num.id = e.target.id;
          display.innerHTML = num.value;
        }


      }

      if (e.target.id == "equ") {
        display.innerHTML += "=" + eval(num.value + "*1");
        num.value = "";
        num.id = 'number';
      }
    });
  }
}
createdisplay();
