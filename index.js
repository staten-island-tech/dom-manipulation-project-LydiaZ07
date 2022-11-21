const DOMSelectors = {
    button:document.getElementById("btn"),
    text:document.querySelector("text"),
    box:document.getElementById("big-black-box"),
    input1:document.querySelector("#texture"),
    input2:document.querySelector("type"),
    input3:document.getElementById("real/fake"),
    output:document.getElementById("out"),
    display:document.getElementById("display")
};
btn.addEventListener('click', run);
function run(e){
    console.log('helo');
e.preventDefault();
  display.insertAdjacentHTML(`afterend`, display.innerHTML);
};
display.innerHTML = `<div class="display-card">
<img class="display-img" src="cookie pic.jpg">
<h2 class="display-artist">Beatles</h2>
<h3 class="display-album">Abbey Road</h3>
 <button class="remove btn">Remove Album</button>`

