let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/repos/rails/rails');

xhr.addEventListener('load', event => {
  let data = event.response;
})

xhr.send();