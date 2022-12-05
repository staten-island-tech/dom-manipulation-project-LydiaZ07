const DOMSelectors = {
  button: document.getElementById("btn"),
    input1: document.getElementById("input1"),
    input2:document.getElementById("input2"),
    input3:document.getElementById("input3"),
    display:document.getElementById("display"),
    form: document.getElementById("form")
};

function result(perfectCookie){
  DOMSelectors.display.insertAdjacentHTML(`beforeend`, `<div id=parent>
  <div id=ptext><p> You have created a ${perfectCookie.input1}, ${perfectCookie.input2}, ${perfectCookie.input3} cookie enjoy!</p> </div>
  <div><button id="now">Remove Cookie </button>
  </div></div>`);
DOMSelectors.input1.value = "";
DOMSelectors.input2.value = "";
DOMSelectors.input3.value = "";

const bye = document.getElementById("bye");
console.log(bye)
};

DOMSelectors.form.addEventListener("submit", function (e) {
e.preventDefault(); 
let perfectCookie={};
perfectCookie.input1= DOMSelectors.input1.value;
perfectCookie.input2 = DOMSelectors.input2.value;
perfectCookie.input3 = DOMSelectors.input3.value;
  result(perfectCookie);
  hi();
});

const button = document.queSelectorAll("#now");
// bye.forEach((button)=> 
button.addEventListener("click", function (){
 /*  const cookie = this.parentElement.parentElement; */
   button.parentElement.remove();});
