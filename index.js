const DOMSelectors = {
  button: document.getElementById("btn"),
    input1: document.getElementById("input1"),
    input2:document.getElementById("input2"),
    input3:document.getElementById("input3"),
    display:document.getElementById("display"),
    form: document.getElementById("form")
};

function result(perfectCookie){
  DOMSelectors.display.insertAdjacentHTML(`beforeend`, `<div id=ptext><p> You have created a ${perfectCookie.input1}, ${perfectCookie.input2}, ${perfectCookie.input3} cookie enjoy!</p> </div>
  <div><button id="bye">Remove album </button>
  </div>`);
  console.log(perfectCookie.input1)
DOMSelectors.input1.value = "";
DOMSelectors.input2.value = "";
DOMSelectors.input3.value = "";

};

DOMSelectors.form.addEventListener("submit", function (e) {
e.preventDefault(); 
let perfectCookie={};
perfectCookie.input1= DOMSelectors.input1.value;
perfectCookie.input2 = DOMSelectors.input2.value;
perfectCookie.input3 = DOMSelectors.input3.value;
  result(perfectCookie);
});

const bye = getElementById('bye');
bai.addEventListener(`click`, function clicky(event){
  console.log(event.target);
  event.target.remove();

})