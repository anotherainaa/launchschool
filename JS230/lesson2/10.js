// document.addEventListener('DOMContentLoaded', () => {
//   let elem1 = document.querySelector('#elem1');
  
//   elem1.addEventListener('click', event => {
//     alert(event.target.tagName);
//   });

//   elem1.addEventListener('click', event => {
//     alert(event.currentTarget.tagName);
//   });
// })

// document.addEventListener('DOMContentLoaded', () => {
//   let elem1 = document.querySelector('#elem1');
  
//   elem1.onclick = function(event) {
//     alert(event.currentTarget.tagName);
//   }

//   // this overwrites the first one
//   elem1.onclick = function(event) {
//     alert(event.target.tagName);
//   }
// })

// From video - MAIN and DIV is firing.

// The (first) 'click' event listener is listening on the bubbling phase that alerts the `tagName`of the `target` element listening on the `div` element. 
// The (second) 'click' event listener is listening on the bubblind phase that alerrs the `tagName` of the `currentTarget` element listening on the `div` element. 

// Note that adding an event listener of the same type doesn't overwrite the first one. 
// I think this could be overwritten if we use global event handlers

// Problem 2

// document.addEventListener('DOMContentLoaded', () => {
//   let elem1 = document.querySelector('#elem1');

//   elem1.addEventListener('click', event => alert('bubbling'));
//   elem1.addEventListener('click', event => alert('capturing'), true);
// });

// When we click, two eventListeners are fired at the same time, the second click event listener is listening on the capturing phase
// that alerts `capturing` listening on the div elem1 element. 

// The other 'click' event listener is listening on the bubbling phase
// that alerts 'bubbling' listening on the div elem1 element.

// This demonstrates that the [click] event object, passes through the capturing phase before the bubbling phase.

// Problem 3

document.addEventListener('DOMContentLoaded', () => {
  let elem1 = document.querySelector('#elem1');

  document.addEventListener('keypress', event => {
    setTimeout(() => alert(event.code), 7000);
  });

  document.addEventListener('click', event => {
    setTimeout(() => alert(event.target.tagName), 7000);
  });
})

// Here, we're queing our event in the event loop
// Events queue and the oldest one that gets processed first regardless of the type of event/