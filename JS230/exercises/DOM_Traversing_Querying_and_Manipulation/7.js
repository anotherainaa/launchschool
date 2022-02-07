function nodesToArr() {
  let body = document.body;
  let arr = [];

  arr.push(body)
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

