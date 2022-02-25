function walk(node, callback) {
  callback(node);

  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

function childNodes(nodeID) {
  let parentNode = document.getElementById(String(nodeID));
  let direct = parentNode.childNodes.length;
  let indirect = 0;
  
  walk(parentNode, node => {
    if (![...parentNode.childNodes].includes(node) && (parentNode !== node)) {
      indirect += 1;
    }
  })

  return [direct, indirect];
}

console.log(childNodes(1));
console.log(childNodes(4));
console.log(childNodes(9));