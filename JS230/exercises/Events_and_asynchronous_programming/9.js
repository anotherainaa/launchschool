// a function that takes a callback function as an argument
// return a new funciton


//What does the new function do/ 
// records the event, if the specific event hasn't been recorded hefore
// exeutes the original callback function

let divRed = document.getElementById('red');
let divBlue = document.getElementById('blue');
let divOrange = document.getElementById('orange');
let divGreen = document.getElementById('green');


divRed.addEventListener('click', track(event => {
  document.body.style.background = 'red';
}));

divBlue.addEventListener('click', track(event => {
  event.stopPropagation();
  document.body.style.background = 'blue';
}));

divOrange.addEventListener('click', track(event => {
  console.log('o-clicked')
  document.body.style.background = 'orange';
}));

divGreen.addEventListener('click', track(event => {
  console.log('g-clicked')
  document.body.style.background = 'green';
}));

let tracker = (() => {
  events = [];
  return {
    list() {
      return events.slice();
    },
    elements() {
      return this.list().map(({target}) => target);
    },
    clear() {
      events.length = 0;
      return events.length;
    },
    addEvent(event) {
      events.push(event);
    }
  };
})();

function track(callback) {
  function eventExists(events, event) {
    return events.includes(event);
  }

  return function(event) {
    if (!eventExists(tracker.list(), event)) {
      tracker.addEvent(event);
    }

    callback(event);
  }
}


/*
tracker.list().length

tracker.elements()

tracker.elements()[0]

tracker.list()
*/