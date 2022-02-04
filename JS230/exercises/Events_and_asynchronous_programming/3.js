
// function makeBold(element, callback) {
//   element.style.fontWeight = 'bold';
//   if (callback) {
//     callback(element);
//   }
// }

// // Notes make sure to add checks to ensure that what was provided was actually a function

// function makeBold(element, callback) {
//   element.style.fontWeight = 'bold';
//   if (callback && typeof callback === 'function') {
//     callback(element);
//   }
// }

// this way we can avoid errors if the second argument is not actually a function and ignore it

// Further Exploration


const bold = new CustomEvent('bolded');

function makeBold(element) {
  element.style.fontWeight = 'bold';
  element.dispatchEvent(bold);
}

let sectionElement = document.querySelector('section');

sectionElement.addEventListener('bolded', event => {
  event.target.classList.add('highlight');
});

// makeBold(sectionElement);
// sectionElement.classList.contains('highlight');

// const catFound = new CustomEvent('animalfound', {
//   detail: {
//     name: 'cat'
//   }
// });

// document.addEventListener('animalfound', (e) => console.log(e.detail.name));
// document.dispatchEvent(catFound);