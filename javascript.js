const container = document.querySelector('.container');

const div = document.createElement('div');
div.classList.add("square");

for(let i=1;i<=256;i++)
{
  container.append(div.cloneNode(true));
}

function changeColor(element){
  let a = Math.random()*255;
  let b = Math.random()*255;
  let c = Math.random()*255;
  element.style.backgroundColor='rgb(' + a + ',' + b + ',' + c + ')';
}

function Erase(element){
  element.style.backgroundColor='white';
}

const buttonErase = document.getElementById('button-erase');

buttonErase.addEventListener('click',()=>
{
  squares.forEach(square => {
    square.style.backgroundColor='white';
  });
})

let squares = document.querySelectorAll('.square');

squares.forEach(square=>{
  square.addEventListener('mouseover',()=>changeColor(square));
})

