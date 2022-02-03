// input: element's ID
// output: an array of array
// that represent the DOM tree of the element
// - the first sub-array contains the element and its siblings

// - the second contains the parent of the element and it's sibling

// - walk the node, for each node
// - add to an array, find all siblings and 
    // - find the parent of the current node
    // - if the current node is in the child nodes of the parent node
    // - add it to the first array,
    // else, find the parent node parents and add the children of that node.

function walk(node, callback) {
  callback(node);

  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

function findSiblings(node) {
  let siblings = [];

  let parent = node.parentNode;
  return [].slice.call(parent.children).map(node => node.nodeName);
}

function domTreeTracer(id) {
  let body = document.body;
  let element = document.getElementById(String(id));
  let result = [];

  while (element !== body) {
    let sibs = findSiblings(element);
    result.push(sibs);

    element = element.parentElement;
    // set element to it's parent
  }
  return result;
}