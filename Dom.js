// Document object mode
document.getElementById('header2').append(" "+"from Apna College")
let divs=document.querySelectorAll('.box');
let i=1;
for (const div of divs) {
  div.innerText=`hi ${i}`
  i++;
}