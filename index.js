const DOMSelectors = {
  button: document.getElementById("btn"),
    box:document.getElementById("big-black-box"),
    input1: document.getElementById("input1"),
    input2:document.getElementById("input2"),
    input3:document.getElementById("input3"),
    display:document.getElementById("display"),
    form: document.getElementById("form"),
};

function result(perfectCookie){
  DOMSelectors.display.insertAdjacentHTML(`beforeend`, `<p> You have created a ${perfectCookie.input1}, ${perfectCookie.input2}, ${perfectCookie.input3} cookie enjoy!</p> 
  <div><button class="remove-btn">Remove album </button>
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

function clear() {
  let clear = document.querySelectorAll(".remove-btn");
  clear.forEach((el) => {
    el.addEventListener("click", function (el) {
      this.parentElement.remove();
    });
  });
}
