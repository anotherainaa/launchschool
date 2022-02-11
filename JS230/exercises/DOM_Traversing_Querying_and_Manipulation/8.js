// Array to nodes// Nested array of nodes
const nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];

// OR
//
// ["BODY", [
//   ["HEADER", []],
//   ["MAIN", []],
//   ["FOOTER", []]]]

function arrayToNodes(nodes) {
  const parent = document.createElement(nodes[0]);
  const children = nodes[1];

  if (children.length === 0) {
    return parent;
  } else {
    for (let i = 0; i < children.length; i += 1) {
      parent.appendChild(arrayToNodes(children[i]));
    }
  }

  return parent;
}

arrayToNodes(nodes);

