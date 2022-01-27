function walk(node, callback) {
  callback(node);

  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

// Question 5

let count = 0;

walk(document, node => {
  if (node.nodeName === 'IMG') {
    count++;
  }
});

console.log(count);

let countPNG = 0;

walk(document, node => {
  if (node.nodeName === 'IMG') {
    if (node.src.includes('png')) {
      countPNG += 1;
    }
  }
});

console.log(countPNG); // 23




// Question 6

walk(document, node => {
  if (node.nodeName === 'a') {
    node.style.color = 'red';
  }
})
