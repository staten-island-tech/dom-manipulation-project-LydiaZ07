const DOMSelectors = {
    button:document.getElementById("btn"),
    text:document.querySelector("text"),
    box:document.getElementById("big-black-box"),
    input1:document.querySelector("#texture"),
    input2:document.querySelector("type"),
    input3:document.getElementById("real/fake"),
    output:document.getElementById("out")
};
 
DOMSelectors.button.addEventListener("click", function (){
    let input1 = DOMSelectors.input1.value;
    console.log(input1);

});