1

```jsx
let firstName = 'Ainaa';
let lastName = 'Azman';

let fullName = firstName + ' ' + lastName;

console.log(fullName);
```

2

```jsx
let firstName = 'Ainaa';
let lastName = 'Azman';

let fullName = firstName + ' ' + lastName;

console.log(fullName);
```

3

```jsx
let firstName = 'Ainaa';
let lastName = 'Azman';

let fullName = firstName + ' ' + lastName;

console.log(firstName.concat(lastName));

console.log(fullName.split(' '));
```

4

```jsx
let language = 'JavaScript';

let idx = language.indexOf('S')
console.log(idx);
```

5

```jsx
let language = 'JavaScript';

let idx = language.indexOf('S')
console.log(idx);

let charCode = language.charCodeAt(idx);
console.log(charCode);
```

6

```jsx
let language = 'JavaScript';

let idx = language.indexOf('S')
console.log(idx);

let charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));
```

7

```jsx
let language = 'JavaScript';

let idx = language.indexOf('S')
console.log(idx);

let charCode = language.charCodeAt(idx);
console.log(charCode);

console.log(String.fromCharCode(charCode));

console.log(language.lastIndexOf('a'));
```

8

```jsx
let a = 'a';
let b = 'b';

console.log(a > b); // false

b = 'B';

console.log(a > b); // true
```

9

```jsx
let language = 'JavaScript'

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));
```

10

```jsx
let language = 'JavaScript'

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));
```

11

```jsx
let language = 'JavaScript'

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));

console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));
```

12

```jsx
let fact1 = 'JavaScript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();

console.log(compoundSentence);

console.log(fact1[0]);
console.log(fact2[0]);
```

13

```jsx
let pi = 22 / 7;
let strPi = pi.toString();

console.log(strPi.lastIndexOf('14'));
```

14

```jsx
let boxNumber = 365.toString(); // syntaxError

console.log(boxNumber);
```

```jsx
let boxNumber = 365..toString(); // Now it works. 

console.log(boxNumber);
```

Getting ahead of Linters. 

```jsx
let boxNumber = (365).toString(); 

console.log(boxNumber);
```

15

```jsx
let boxNumber = (365).toString(); 

console.log(boxNumber);

let result = parseInt(boxNumber, 10); 
console.log(typeof result);

let strNum = String(result);
console.log(typeof strNum);
```