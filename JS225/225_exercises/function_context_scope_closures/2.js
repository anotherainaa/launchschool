const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};


console.log(franchise.allMovies());

// Why?
// this in the anonymous callback function is set to the global object
// to fix this, we can initialize and assign a local variable self which is set to this withint allmovies
// which we then reference in the anonymous callback function

// Or we can use arrow functions - they don't create ther own this binding
// this within an arrow function is determined lexically (the outer function allmovies this)