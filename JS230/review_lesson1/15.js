// Question 1

let h1 = document.querySelector('h1');
h1.classList.add('heading');

// Alternative solution

document.getElementById('primary_heading').setAttribute('class', 'heading');

// Question 2

document.getElementById('list').classList.add('bulleted');

// Alternative solution

document.getElementById('list').setAttribute('class', 'bulleted');

// Question 5

let notice = document.querySelector('#notice');

let link = document.querySelector('#toggle');
link.onclick = function(event) {
  notice.classList.toggle('hidden');
}

notice.onclick = function(event) {
  notice.classList.toggle('hidden');
}

document.getElementById('toggle').onclick = e => {
  e.preventDefault();
  let notice = document.getElementById('notice');
  if (notice.getAttribute('class') === 'hidden') {
    notice.setAttribute('class', 'visible');
  } else {
    notice.setAttribute('class', 'hidden');
  }
};

document.getElementById('notice').onclick = event => {
  event.preventDefault();
  event.currentTarget.setAttribute('class', 'hidden');
}

// Question 6

document.body.id = 'styled';

// Alternative

document.body.setAttribute('id', 'styled');

