function sliceTree(startId, endId) {
  let endElement = document.getElementById(endId);
  if (!endElement) return;
  if (startId > endId) return;

  let sliced = [];

  let current = endElement;

  while (current.id >= startId) {
    if (parseInt(current.id, 10) < startId) {
      console.log(current.id);
      return;
    };

    console.log(current.id, sliced);
    sliced.unshift(current.tagName);
    current = current.parentElement;
  }

  return sliced;
}

  // start from the end
  // insert into sliced from the beginning
  // find the parent of end and keep going
  // if along the way the parent of 

// if the parent id of the current node is smaller than start return

// sliceTree(1, 4); ["ARTICLE", "HEADER", "SPAN", "A"]

// as soon as we find a parent 

/*
if the end number is a sibling, grab the current and sibling only?

PEDAC
input: 
- two numbers representing 
  - id of first node, parent node
  - id of second node, innermost child node's id
output:
- array of element node
- undefined

rules
- inclusive of right hand side node
- end index doesn't have to be id of the innermost child node
- only consider element nodes
- only elements that have `body` as an ancestor (parent, grandparent etc) are sliceable
- if the `id` attribute of the start or end index is not in the DOM, return undefined 
- if the slice is not feasible
  - no path connecting the element at the starting index to the ending index - return undefined


*/

