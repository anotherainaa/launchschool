function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

// Question 1
// use `lastChild` and `childNodes`

// targetting the header h1 on the river

// Alternative solution
let html = document.childNodes[1]; // skips doctype and selects html
let body = html.lastChild; // skips head and text nodes and selects body
let heading = body.childNodes[1]; // skips the first text node

// My solution 
let h1 = document.lastChild.lastChild.childNodes[1];

// Other alternatives 
let h1 = document.lastChild.lastChild.firstChild.nextSibling;

// document references the top document
// the first node is <!DOCTYPE html>, while the second is `<html>`

// we can also use `document.body.childNodes[1]`;
// However we don't fulfill the requirement of having to use `lastChild` 

// Once we are able to reference the correct node, we can use the `sytle` attribute? 
// to change CSS properties of the referenced node. 
// Note that the style generated is inline style and it cannot reference any existing style, only inline style

h1.style.color = 'red';
h1.style.fontSize = '48px';

// Question 2 - count the paragraphs on the page and log result

let pCount = 0;
walk(document.body, (node) => {
  if (node.tagName === 'P') {
    pCount += 1;
  }
})

let pCount = 0;
walk(document.body, (node) => {
  if (node.nodeName === 'P') {
    pCount += 1;
  }
})

let pCount = 0;
walk(document.body, (node) => {
  if (node.toString() === '[object HTMLParagraphElement]') {
    pCount += 1;
  }
})

let pCount = 0;
walk(document.body, (node) => {
  if (node instanceof HTMLParagraphElement) {
    pCount += 1;
  }
})


console.log(pCount);

let pCount = document.querySelectorAll('p'); // Returns a node list
pCount.length;
pCount[1].remove();
pCount.length; // > 5

// a nodeList is not a live collection. Changing a nodelist doesn't affect the variable referencing the nodeList

let pCount = document.getElementsByTagName('P'); // returns a HTML collection - live collection
pCount.length; // 5
pCount[1].remove(); 
pCount.length; // > 4 - removing the node affects the variable reference

// Converting the live colleciton in an array prevents it from being updated
// when mutating the array

let pCount = document.getElementsByTagName('P'); // returns a HTML collection - live collection
pCount = [...pCount];
pCount.length; // 5
pCount[1].remove(); 
pCount.length; // > 5 - removing the node doesn't affect the array, although the node is removed from the DOM
pCount[0].parentElement // null, because the node has been removed from the DOM

// Question 3

let ps = document.querySelectorAll('p');
let firstWords = [...ps].map(p => p.textContent.trim().split(' ')[0]);
console.log(firstWords); // ["A", "The", "The", "Where", "And"]

// Alternative solutions

let ps = document.querySelectorAll('p');
let firstWords = [...ps].map(p => p.firstChild.data.trim().split(' ')[0]);
console.log(firstWords); // ["A", "The", "The", "Where", "And"]

// Alternative solution
let words = [];
walk(document, node => {
  if (node.nodeName === 'P') {
    let text = node.firstChild.data.trim();
    let firstWord = text.split(' ')[0];
    words.push(firstWord);
  }
});

console.log(words);

// Question 4

let ps = document.querySelectorAll('p');
let pArr = [].slice.call(ps, 1, ps.length);
console.log(pArr);
pArr.forEach(elem => elem.classList.add('stanza'));

// Alternative solution

let first = true;
walk(document, node => {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
})

// Alternative solution

let first = true;
let ps = document.querySelectorAll('p');
ps.forEach(elem => {
  if (first) {
    first = false;
  } else {
    elem.classList.add('stanza');
  }
})


// Question 5

let imgCount = 0;
walk(document.body, node => {
  if (node.tagName === 'IMG') {
    imgCount += 1;
  }
})

console.log(imgCount); // 48

let pngCount = 0;
walk(document.body, node => {
  if (node.tagName === 'IMG' && node.getAttribute('src').includes('png')) {
    pngCount += 1;
  }
})

console.log(pngCount); // 23

let pngCount = 0;
walk(document.body, node => {
  if (node.tagName === 'IMG' && node.getAttribute('src').match(/png$/)) {
    pngCount += 1;
  }
})

let pngCount = images.filter(img => img.getAttribute('src').match(/png$/).length);
console.log(pngCount); 


// Question 6

let a = document.querySelectorAll('a');

[...a].forEach(link => link.style.color = 'red');

walk(document.body, node => {
  if (node.tagName === 'A') {
    node.style.color = 'red';
  }
})