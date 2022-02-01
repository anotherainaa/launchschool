// Original

// document.addEventListener('DOMContentLoaded', () => {
//   let elem1 = document.querySelector('#elem1');
//   let elem4 = document.querySelector('#elem4');

//   elem1.addEventListener('click', event => {
//     alert(event.currentTarget.id);
//   });
//   elem4.addEventListener('click', event => {
//     alert(event.currentTarget.id);
//   });
// })

// Question 1

document.addEventListener('DOMContentLoaded', () => {
  let elem1 = document.querySelector('#elem1');
  let elem4 = document.querySelector('#elem4');

  elem1.addEventListener('click', event => {
    alert(event.currentTarget.id);
  });
  elem4.addEventListener('click', event => {
    alert(event.currentTarget.id);
  });
})

// Question 2

// div 1, 2 and 4 would fire, because we use the capturing phase and we don't have an event listener on div 3
//  then adding the line of code would fire div 3 last because we defined in on the bubbling phase


// Question 3

// Only 2 will be fired because div 0 is not the parent of the other div. 
// Div 1 and div 4 are not nested within div 0. Therefore, we don't even pass through div0 when we click on something.