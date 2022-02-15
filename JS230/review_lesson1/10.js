let ps = document.querySelectorAll('p');

function findAllParagraphs() {
  let matches = [];
  let nodes = document.body.childNodes;

  for (let index = 0; index < nodes.length; index += 1) {
    if (nodes[index] instanceof HTMLParagraphElement) {
      matches.push(nodes[index]);
    }
  }
  return matches;
}

console.log(findAllParagraphs());

// Question 2

let ps = document.querySelectorAll('p');
[...ps].forEach(elem => {
  elem.classList.add('article-text');
})

function addClasstToParagraphs(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-text');
  }

  let nodes = node.childNodes;
  for (let index = 0; index < nodes.length; index += 1) {
    addClasstToParagraphs(nodes[index]);
  }
}

addClasstToParagraphs(document.body);

// Question 3

function getElementsByTagName(tagName) {
  let matches = [];
  let nodes = document.body.childNodes;

  for (let index = 0; index < nodes.length; index += 1) {
    if (nodes[index].tagName === tagName) {
      matches.push(nodes[index]);
    }
  }
  return matches;
}

getElementsByTagName('p').forEach(paragraph => {
  paragraph.classList.add('article-text');
});


// Problems Group 2

let ps = document.getElementsByTagName('p'); // returns live collection
[...ps].forEach(paragraph => {
  paragraph.classList.add('article-text');
})


// Problem 2

let intros = document.getElementsByClassName('intro');
let ps = [];
[...intros].forEach(elem => {
  ps = ps.concat([...elem.getElementsByTagName('p')]);
});


ps.forEach(paragraph => {
  paragraph.classList.add('article-text');
})

// Solution

let intros = document.getElementsByClassName('intro');

[...intros].forEach((elem) => {
  let paragraphs = elem.getElementsByTagName('p');
  [...paragraphs].forEach(paragraph => paragraph.classList.add("article-text"));
})

// Alternative
// Assuming that the first element child of every div class intro is a paragraph.

let intros = document.getElementsByClassName('intro');
for (let index = 0; index < intros.length; index += 1) {
  intros[index].firstElementChild.classList.add('article-text');
}

// Safer to search for specific code than to rely on relative positions of elements. 




