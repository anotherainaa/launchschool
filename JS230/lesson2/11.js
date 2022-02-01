document.addEventListener('DOMContentLoaded', () => {
  let outer = document.querySelector('.outer');
  let inner = document.querySelector('.inner');

  outer.addEventListener('click', event => {
    event.stopPropagation();
    event.currentTarget.style.background = 'red';
  }, true);

  inner.addEventListener('click', event => {
    event.stopPropagation();
    event.currentTarget.style.background = 'red';
  });

  document.querySelector('button').addEventListener('click', event => {
    event.preventDefault();
    alert('Following the link was prevented');
  });

  document.querySelector('a').addEventListener('click', event => {
    event.stopPropagation();
    alert('Click event on the anchor tag');
  }, true)
})

// Note that we have to have stopPropagation on both ?
// Otherwise one would stop propagation and the other wouldnt'

// What do we observe in the example where we prevent default behavior but we have nested elements listening for the same event? 
// When does the browser default behavior occur? 
// After the event object go through propagation phases

// What happens in the second example? 

// The `event.preventDefault` is never called because we stopPropagation on the second event handler. 
// Note that the callback is only "fired" if the event is able to fire the callback. 
// If it's stopped in its tracked like here, then it doesn't get called.