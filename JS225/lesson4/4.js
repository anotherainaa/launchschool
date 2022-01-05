// Closures and Private Data

// Closure example

function makeCounter() {
  let count = 0;
  return function() {
    count += 1;
    console.log(count);
  };
}

// functions that are completely self-contained don't form closures

let counter = makeCounter();
console.log(counter());
console.log(counter());

// Problem 1

function makeCounterLogger(startNum) {
  return function(endNum) {
    let num;

    if (startNum > endNum) {
      for (i = startNum; i >= endNum; i -= 1) {
        console.log(i);
      }
    } else {
      for (i = startNum; i <= endNum; i += 1) {
        console.log(i);
      }
    }
  }
}

let countlog = makeCounterLogger(5);

countlog(8);
countlog(2);


// Problem 2

function makeList() {
  let list = [];
  return function(item) {
    if (item === undefined) {
      if (list.length === 0) {
        console.log('The list is empty.');
      } else {
        list.forEach(item => console.log(item));
      }
    } else if (list.includes(item)) {
      let i = list.indexOf(item);
      list.splice(i, 1);
      console.log(`${item} removed!`)
    } else if (item !== undefined) {
      list.push(item);
      console.log(`${item} added!`)
    }
  }
}

let list = makeList();

// Alternative solution

function makeList2() {
  let items = [];
  
  return function(newItem) {
    let index;
    if (newItem) {
      index = items.indexOf(newItem);

      if  (index === -1) {
        items.push(newItem);
        console.log(newItem + ' added!');
      } else {
        items.splice(index, 1);
        console.log(newItem + ' removed!');
      } 
    } else {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    }
  };
}

let list2 = makeList2();