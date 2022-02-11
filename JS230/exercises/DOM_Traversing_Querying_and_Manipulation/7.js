// function nodesToArr(parent = document.body) {
//   const nodesArr = [parent.tagName, []];

//   for (let child of parent.children) {
//     nodesArr[1].push(nodesToArr(child));
//   }

//   return nodesArr;
// }

// console.log(nodesToArr());

function nodesToArr(node) {
  let childArr = [];

  if (node.children.length === 0) {
    return [node.tagName, childArr];
  } else {
    for (let i = 0; i < node.children.length; i++) {
      childArr.push(nodesToArr(node.children[i]));
    }
    return [node.tagName, childArr];
  }
}



// ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// ["PARENT_TAG_NAME", [children]] 

// for each parent node, create an array and put it into the left side
// for each of it's children put it 

// ['BODY', [HEADER], [MAIN], [FOOTER]]

// Parent // children are all inside of a array, which are further inside arrays
// ['BODY', [[HEADER, []], [MAIN, []], [FOOTER, []]]]

// [BODY, []]

// [BODY, [[CHILD1, []], [CHILD2, []], [CHILD3, []]]]

