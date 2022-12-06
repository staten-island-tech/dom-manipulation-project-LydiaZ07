const DOMSelectors = {
  button: document.getElementById("btn"),
    input1: document.getElementById("input1"),
    input2:document.getElementById("input2"),
    input3:document.getElementById("input3"),
    display:document.getElementById("display"),
    form: document.getElementById("form")
};

function result(perfectCookie){
  DOMSelectors.display.insertAdjacentHTML(`beforeend`, `<div>
  <div class=ptext><p> You have created a ${perfectCookie.input1}, ${perfectCookie.input2}, ${perfectCookie.input3} cookie enjoy!</p>
  <button class="bye">Remove Cookie </button>
  </div>`);
DOMSelectors.input1.value = "";
DOMSelectors.input2.value = "";
DOMSelectors.input3.value = "";
};

DOMSelectors.form.addEventListener("submit", function (e) {
e.preventDefault(); 
const perfectCookie={};
perfectCookie.input1= DOMSelectors.input1.value;
perfectCookie.input2 = DOMSelectors.input2.value;
perfectCookie.input3 = DOMSelectors.input3.value;
  result(perfectCookie);
  bye();
});

function bye(){
  const buttons = document.querySelectorAll(".bye");
  buttons.forEach((button)=> {
    button.addEventListener("click", function (){
      button.parentElement.remove();
    })

    })
  };


const buttons = document.querySelectorAll("now");
console.log(buttons);
buttons.forEach((button)=> {
 button.addEventListener("click", removeButton)});
function removeButton() {
 /*  const cookie = this.parentElement.parentElement; */
 console.log("hello");
   button.parentElement.parentElement.remove()};
