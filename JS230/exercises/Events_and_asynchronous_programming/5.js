// context menu

// document.addEventListener('DOMContentLoaded', () => {
//   document.getElementsByTagName('main')[0].addEventListener('contextmenu', event => {
//     event.preventDefault();
//     alert(`I'm an alert for ${event.target.tagName}`);
//   })


//   document.getElementById('sub').addEventListener('contextmenu', event => {
//     event.stopPropagation();
//     event.preventDefault();
//     alert(`I'm an alert for ${event.target.id}`)
//   })
// })

document.addEventListener('contextmenu', event => {
  if (event.target.tagName === 'MAIN' || event.target.id === 'sub') {
    event.preventDefault();
    alert(`I'm an alert for ${event.target.tagName}`);
  }
});