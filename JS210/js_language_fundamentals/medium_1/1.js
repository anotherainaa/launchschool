// What will each line of the following code return?

console.log((false && undefined));  // false
console.log((false || undefined));  // undefined
console.log(((false && undefined) || (false || undefined))); // undefined
console.log(((false || undefined) || (false && undefined)));  // false
console.log(((false && undefined) && (false || undefined))); 
console.log(((false || undefined) && (false && undefined))); 
console.log(('a' || (false && undefined) || ''));  
console.log(((false && undefined) || 'a' || '')); 
console.log(('a' && (false || undefined) && '')); 
console.log(((false || undefined) && 'a' && '')); 