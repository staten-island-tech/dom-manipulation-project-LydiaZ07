const DOMSelectors = {
    button:document.getElementById("btn"),
    text:document.querySelector("text"),
    box:document.getElementById("big-black-box"),
    input1:document.querySelector("#texture"),
    input2:document.querySelector("#type"),
    input3:document.getElementById("extra"),
    output:document.getElementById("out"),
    display:document.getElementById("display")
};

DOMSelectors.button.addEventListener("click", function (e) {
e.preventDefault(); 
  let input1 = DOMSelectors.input1.value;
  let input2 = DOMSelectors.input2.value;
  let input3 = DOMSelectors.input3.value;
  console.log(input1, input2, input3);
  result();
  
  function result(){
    DOMSelectors.button.insertAdjacentHTML("afterbegin", '<p> You have created a ${input1} ${input2} ${input3} cookie, enjoy!</p>');
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.input3.value = "";
  }

  // DOMSelectors.display .insertAdjacentHTML("afterbegin", '<p> You have created a ${input1} ${input2} ${input3} cookie, enjoy!</p>');
  // DOMSelectors.input1.value = "";
  // DOMSelectors.input2.value = "";
  // DOMSelectors.input3.value = "";
});






























// btn.addEventListener('click', run);
// function run(){
//   display.insertAdjacentHTML(`afterend`, display.innerHTML);
  // display.innerHTML = `<div class="display-card">`
// };
// <img class="display-img" src="cookie pic.jpg">
// </img>

