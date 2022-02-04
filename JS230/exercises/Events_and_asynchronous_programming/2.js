document.querySelector('html').addEventListener('click', () => {
  document.querySelector('#container').style = 'display: none';
});

document.querySelector('#container').addEventListener('click', event => {
  // event.stopPropagation();
});

// We can delegate the click behavior to document
document.querySelector('html').addEventListener('click', event => {
  if (event.target.id !== 'container') {
    document.querySelector('#container').style = 'display: none';
  }
})

// LS solution


document.querySelector('html').addEventListener('click', event => {
  let container = document.querySelector('#container');

  if (!container.contains(event.target)) {
    container.style = 'display: none';
  }
})