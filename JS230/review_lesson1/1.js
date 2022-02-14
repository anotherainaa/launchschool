// Counting nodes 
// Warning, do not add a script tag when counting nodes as it will add extra nodes
// Also, make sure to pay attention if we're counting from body as the top or HTML as the top

function walk(node, callback) {
  callback(node);
  for (let index = 0; index < node.childNodes.length; index += 1) {
    walk(node.childNodes[index], callback);
  }
}

let walkCount = 0;

walk(document.body, (node) => {
console.log(node.tagName);
  walkCount += 1;
});

console.log(walkCount);