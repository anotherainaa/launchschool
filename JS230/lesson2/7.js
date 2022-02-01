

// document.addEventListener('DOMContentLoaded', event => {
//   function displayAlert(event) {
//     let message = document.getElementById('message').value;
//     alert(message);
//   }

//   let button = document.getElementById('alert');
//   button.addEventListener('click', displayAlert);
// })

// Without displayAlert 

// document.addEventListener('DOMContentLoaded', event => {
//   let button = document.getElementById('alert');

//   button.addEventListener('click', event => {
//     let message = document.getElementById('message').value;
//     alert(message);
//   });
// })

// Using the globaleventhandler

function displayAlert() {
  let message = document.getElementById('message').value;
  alert(message);
}

document.addEventListener('DOMContentLoaded', () => {
  let button = document.getElementById('alert');
  button.onclick = displayAlert;
});