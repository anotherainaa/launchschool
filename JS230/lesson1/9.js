function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
};

// Question 1

let html = document.childNodes[1];
let body = html.lastChild;
let heading = body.childNodes[1];
heading.style.color = 'red';
heading.style.fontSize = '48px';


// Question 2

let count = 0;
walk(document, node => {
  if (node.nodeName === 'P') {
    count++;
  }
});

console.log(count);

// QUestion 3

let words = [];

walk(document, node => {
  if (node.nodeName === 'P') {
    // let text = node.textContent.trim();
    let text = node.firstChild.data.trim();
    let sentence = text.split(/\s+/g);
    words.push(sentence[0]);
  }
})

console.log(words);

// Question 4
let first = true;

walk(document, node => {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});

