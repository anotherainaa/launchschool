// Problem 1

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('mousemove', event => {
    let x = document.getElementsByClassName('x')[0];
  
    x.style.left = String(event.clientX) + 'px';
    x.style.top = String(event.clientY) + 'px';

  });

  document.addEventListener('keydown', event => {
    let key = event.key;
    let color;
    
    if (key === 'r') {
      color = 'red';
    } else if (key === 'g') {
      color = 'green';
    } else if (key === 'b') {
      color = 'blue';
    }
  
    if (color) {
      let x = document.querySelector('.x');
      for (let index = 0; index < x.children.length; index += 1) {
        var child = x.children[index];
        child.style.background = color;
      }
    }
  })
})

