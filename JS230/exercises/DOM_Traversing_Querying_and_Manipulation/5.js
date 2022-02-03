function colorGeneration(number) {
  let article = document.getElementById('1');
  let elements = [];
  
  walk(article, (node) => {
    let arr = sliceTree(article.id, node.id);

    if (arr && arr.length === number) {
      elements.push(node);
    }
  })

  console.log(elements);
  elements.forEach(elem => {
    elem.classList.add('generation-color');
  })
}

function sliceTree(start, end) {
  let endElement = document.getElementById(end);
  const startElement = document.getElementById(start);

  if (!startElement || !endElement) {
    return undefined;
  }

  const slicedTree = [];
  let currentElement;

  do {
    currentElement = endElement;
    slicedTree.unshift(currentElement.tagName);
    endElement = endElement.parentNode;
  } while (currentElement.id !== String(start) && endElement.tagName !== 'BODY');

  return (endElement.tagName === 'BODY' && currentElement.id !== String(start) ? undefined : slicedTree);
}

function walk(node, callback) {
  callback(node);

  for (let i = 0; i < node.childNodes.length; i += 1) {
    walk(node.childNodes[i], callback);
  }
}

/*

colors specific generation of the DOM tree

a generation is a set of elements that are on the same level of indentation

use .generation-color class to color the specific generation


*/