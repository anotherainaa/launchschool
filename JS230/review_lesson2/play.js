document.addEventListener('DOMContentLoaded', () => {
  let html = document.querySelector('html');
  let body = document.querySelector('body');
  let button = document.getElementById('demo');
  let messages = document.getElementById('messages');
  let phases = {
    1: 'capture',
    2: 'target',
    3: 'bubble',
  }

  function logClickedMessage(event) {
    let currentTarget = event.currentTarget.tagName;
    let phaseName = phases[event.eventPhase];
    let message = 'Click event triggered during ' + phaseName + ' phase at ' + currentTarget;
    debugger;
    message += ' And this event was previously handled at ' + event.previouslyHandledTagName;
    messages.innerHTML += message + '<br/>';
    event.previouslyHandledTagName = currentTarget;
  }

  html.addEventListener('click', logClickedMessage, true);
  body.addEventListener('click', logClickedMessage);
  button.addEventListener('click',logClickedMessage, true);
})