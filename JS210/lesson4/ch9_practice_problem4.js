// Can we insert data into an array at a negative index? If so, why is this possible?

let arr = [1, 2, 3]
arr[-1] = 'hello';

console.log(arr); 
console.log(arr[-1]);
console.log(arr['-1']);

// Yes, it's possible. Because arrays are objects? 