// Question 1

let h1 = document.getElementById('primary_heading');
h1.classList.add('heading');

// Question 2

let ul = document.querySelector('#list');
console.log(ul);
ul.setAttribute('class', 'bulleted');

// Question 3

let hiddendiv = document.getElementById('notice');

document.getElementById('toggle').addEventListener('click', event => {
  event.preventDefault();

  if (hiddendiv.getAttribute('class') === 'hidden') {
    hiddendiv.setAttribute('class', 'visible');
  }
  else {
    hiddendiv.setAttribute('class', 'hidden');
  }
})

// Question 4

hiddendiv.addEventListener('click', event => {
  event.preventDefault();

  event.currentTarget.setAttribute('class', 'hidden');
})

// Question 5

let p = document.getElementById('multiplication');

p.textContent = '117';

// Alternative solution

p.innerText = String(13 * 9);

// Question 6

document.childNodes[1].lastChild.setAttribute('id', 'styled');

// Alternative solution

document.childNodes[1].lastChild.id = '';
document.body.id = 'styled';

