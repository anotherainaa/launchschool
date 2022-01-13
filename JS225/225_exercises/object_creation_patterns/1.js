// ancestors

// name property added to make objects easier to identify
const foo = {name: 'foo'};

const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';


// foo.ancestors = function() {
//   let results = [];
//   let currentObj = Object.getPrototypeOf(this);

//   while (!results.includes('Object.prototype')) {
//     if (currentObj.name) {
//       results.push(currentObj.name);
//     } else {
//       results.push('Object.prototype')
//     }
//     currentObj = Object.getPrototypeOf(currentObj);
//   }
//   return results;
// }


// LS Recursive solution

// Object.prototype.ancestors = function ancestors() {
//   const ancestor = Object.getPrototypeOf(this);

//   if (Object.prototype.hasOwnProperty.call(ancestor, 'name')) {
//     return [ancestor.name].concat(ancestor.ancestors());
//   }

//   return ['Object.prototype'];
// };

// While loop solution

Object.prototype.ancestors = function ancestors() {
  let currentObj = Object.getPrototypeOf(this);
  const result = [];

  while (Object.prototype.hasOwnProperty.call(currentObj, 'name')) {
    result.push(currentObj.name);
    currentObj = Object.getPrototypeOf(currentObj);
  }
  result.push('Object.prototype');
  return result;
};


console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

