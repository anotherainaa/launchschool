// What is readyState?
// return the state an XMLHttpRequest client is in. (0 - 4)


let xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState);

xhr.open('GET', 'https://api.github.com/repos/rails/rails');
console.log('OPENED', xhr.readyState); 


// The equivalent to the `readystatechange` event. 

xhr.addEventListener('readystatechange', () => {
  console.log('state changing', xhr.readyState); // this allows us to see the change form 2 to 3 and 3 to 4
})

// xhr.onreadystatechange = function() {
//   console.log('state changing', xhr.readyState); // this allows us to see the change form 2 to 3 and 3 to 4
// }

// The equivalent to the onprogress GlobalEventHandler

xhr.addEventListener('progress', event => {
  console.log('LOADING', xhr.readyState); 
})

// xhr.onprogress = function() {
//   console.log('LOADING', xhr.readyState); 
// };

// The equivalent to load GlobalEventHandler
xhr.addEventListener('load', () => {
  console.log('LOAD DONE', xhr.readyState);
});

// xhr.onload = function() {
//   console.log('LOAD DONE', xhr.readyState);
// }

xhr.send(); // => this will trigger on progress, state 3, and on load, state 4

// const xhr = new XMLHttpRequest(),
//     method = "GET",
//     url = 'https://api.github.com/repos/rails/rails';

// xhr.open(method, url, true);
// xhr.onreadystatechange = function () {
//   // In local files, status is 0 upon success in Mozilla Firefox
//   if(xhr.readyState === XMLHttpRequest.DONE) {
//     var status = xhr.status;
//     if (status === 0 || (status >= 200 && status < 400)) {
//       // The request has been completed successfully
//       console.log('Success');
//     } else {
//       console.log('error')
//       // Oh no! There has been an error with the request!
//     }
//   }
// };
// xhr.send();