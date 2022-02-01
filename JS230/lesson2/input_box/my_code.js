let cursorInterval;

document.addEventListener('DOMContentLoaded', () => {
  let textField = document.querySelector('.text-field');

  textField.addEventListener('click', event => {
    event.stopPropagation();
    textField.classList.add('focused');
    cursorInterval = cursorInterval || setInterval(() => {
      textField.classList.toggle('cursor');
    }, 500);
  });

  let content = document.querySelector('.content');

  document.addEventListener('keydown', event => {
    console.log('press');
    let focused = textField.getAttribute('class').includes('focused');
    let contentDiv = textField.querySelector('.content');
    
    if (event.key === 'Backspace' && focused) {
      let text = contentDiv.textContent;
      contentDiv.textContent = text.slice(0, -1);
    } else if (focused) {
      contentDiv.textContent += event.key;
    }
  });

});

document.addEventListener('click', event => {
  let textField = document.querySelector('.text-field');
  clearInterval(cursorInterval);
  cursorInterval = null;
  textField.classList.remove('focused');
  textField.classList.remove('cursor');
})

