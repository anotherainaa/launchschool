// What will the code log? 

const myObject = {
  prop1: '123',
  prop2: '234',
  'prop 3': '345',
};

const prop2 = '456';
myObject['prop2'] = '456';
myObject[prop2] = '678';

console.log(myObject[prop2]);
console.log(myObject.prop2);

// My answer
// Line 13 will log 678 
// Line 14 will log 456
 
// the prop2 key "456" was re-assigned the value of 678 on line 11.  
// prop2 was re-assigned the value of 456 on line 10

// they are different value because when we use bracket notation with variable prop2 on line 11, the string value '456' was used as a key
// and does not overwrite the `prop2` key in myObject. 

// Further Exploration

const myObj = {};
myObj[myFunc()] = 'hello, ';

function myFunc() {
  return 'funcProp';
}

console.log(myObj);
myObj[myFunc()] = 'world!';
console.log(myObj);

// log 'hello, '
// then 'world'