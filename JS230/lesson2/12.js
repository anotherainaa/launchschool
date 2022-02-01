// function clickHandler(event) {
//   let message = document.getElementById('message');
//   message.textContent = `${event.target.textContent} was clicked!`;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   let buttons = document.querySelectorAll('button');

//   for (let i = 0; i < buttons.length; i += 1) {
//     buttons[i].addEventListener('click', clickHandler);
//   }
// });

document.addEventListener('click', event => {
  console.log('clickity click');
  if (event.target.tagName === 'BUTTON') {
    let message = document.getElementById('message');
    message.textContent = `${event.target.textContent} was clicked!`;
  }
})
