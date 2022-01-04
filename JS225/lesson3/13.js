// Question 1 

// What will it output? 


let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  },
};

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turk.getDescription);

// This will log undefined undefined is a undefined.
//  because the method has been removeed from its context when we extract it and passed it to
// logreturnVal as an argument.

// Question 2 

// Alter logReturnVal to take an additional context argument 

function logReturnVal2(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal2(turk.getDescription, turk);

// We use `call` to invoke `func` and passing in the argument `context`
// to provide the function with the right execution context. 
// we can also use apply. 

// Question 3

let getTurkDescription = turk.getDescription.bind(turk);

console.log(getTurkDescription());


// Question 4

let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls', 
  listGames() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    });
  },
};

TESgames.listGames();

// This will not output the desired output
//  The anonymous function has its execution context set implicitly to the global object

// Question 5

let TESgames2 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls', 
  listGames() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ' ' + title);
    });
  },
};

TESgames2.listGames();

// Question 6

let TESgames3 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls', 
  listGames() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  },
};

TESgames3.listGames();

// Question 7

let TESgames4 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls', 
  listGames() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  },
};

TESgames4.listGames();

// Question 8

let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a)
// The values of foo.a will be 0;
// Inner functions lose the outer object as context
// line 114 references global `a` rathen than foo's property a. 

// Question 9

let foo2 = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo2.incrementA();
foo2.incrementA();
foo2.incrementA();

console.log(foo2.a);

// Use call or apply to make sure the inner function has this as it's context. 


let foo3 = {
  a: 0,
  incrementA() {
    let increment = function() {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
};

foo3.incrementA();

console.log(foo3.a);