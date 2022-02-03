function walk(node, callback) {
  callback(node);

  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

let nodes = [];
walk(document, (node) => {
  nodes.push(node.nodeName);
})

console.log(nodes.length); // this includes document itself and script tag and maybe additional white space if we add space for the script tags
console.log(nodes);

// The number of nodes on the first snippet: 11, html, head and body are injected by the browser

// The number of nodes on the second snippet: 9 , html, head and body are injected by the browser