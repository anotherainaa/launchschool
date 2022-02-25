function walk(node, callback) {
  callback(node);

  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

let count = 0;

// start from HTML
walk(document.firstChild, (node) => {
  console.log(node);
  count += 1;
})

console.log(count);