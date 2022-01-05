// Question 1 

let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod();

// - returns undefined? 
// - because myChildObject is the execution context for myMethod
//  - and there is no count in myChildObject


// Question 2
// To make it work we can explicitly set myObject as the execution context using call

console.log(myObject.myChildObject.myMethod.call(myObject));

// Question 3

let person = {
  firstName: 'Peter',
  lastName: 'Parker',
  fullName() {
    console.log(this.firstName + ' ' + this.lastName + ' is the Amazing Spiderman!');
  },
};

let whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();

// This will log Peter Parker is the Amazing Spiderman to the console. 
// bind returns a new functino that permanenly bind the function (whoIsSpiderman) assigned to 
// fullName to the person object


// Question 4 

// Solution 1

let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let self = this;
    let tax = 3000;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log('1 - ', computer.total());

// Solution 2 - apply

let computer2 = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.apply(this);
  }
};

console.log('2 - ', computer2.total());

// Solution 3 - permanent bind

let computer3 = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let specialDiscount = function() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(this);

    return this.price + this.shipping + tax - specialDiscount();
  }
};

console.log('3 - ', computer3.total());