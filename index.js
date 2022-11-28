const DOMSelectors = {
    button:document.getElementById("btn"),
    text:document.querySelector("text"),
    box:document.getElementById("big-black-box"),
    input1:document.getElementById("input1"),
    input2:document.getElementById("input2"),
    input3:document.getElementById("input3"),
    output:document.getElementById("out"),
    display:document.getElementById("display")
};

DOMSelectors.button.addEventListener("submit", function (e) {
e.preventDefault(); 
let input1 = DOMSelectors.input1.value;
let input2 = DOMSelectors.input2.value;
let input3 = DOMSelectors.input3.value;
  result();
});
  function result(){
    DOMSelectors.display.insertAdjacentHTML(`beforeend`, '<p> You have created a ${input1} ${input2} ${input3} cookie, enjoy!</p>');
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
  };

  // function clear(){
  //   let clear = document.querySelectorAll(".remove");
  //   clear.forEach((el) => {
  //     el.addEventListener("click", function (el) {
  //       this.parentElement.remove();