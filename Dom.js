// Document object mode
let el = document.createElement("button");
el.innerText = "click me!";
el.style.backgroundColor = "red";
el.style.color = "white";
document.body.prepend(el);
let para = document.querySelector("p");
para.classList.add("newclass");