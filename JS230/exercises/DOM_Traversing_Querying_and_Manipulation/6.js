/* Node swap

input 

*/

function nodeSwap(id1, id2) {
  const node1 = document.getElementById(String(id1));
  const node2 = document.getElementById(String(id2));

  let validNodeSwap = (node1 && node2) && (!node1.contains(node2) && !node2.contains(node1));
  if (!validNodeSwap) return;

  const node2Sibling = node2.nextElementSibling;
  const node2Parent = node2.parentNode;
  node1.parentNode.insertBefore(node2, node1.nextElementSibling);
  node2Parent.insertBefore(node1, node2Sibling);
}


// Invalid swap 
// console.log(nodeSwap(1, 20));

// invalid because one of the nodes is a "child" of the other
// console.log(nodeSwap(1, 4));
// console.log(nodeSwap(9, 3));

// valid swap

//one swap
nodeSwap(1, 2);


// multiple swaps
// nodeSwap(3, 1);
// nodeSwap(7, 9);
