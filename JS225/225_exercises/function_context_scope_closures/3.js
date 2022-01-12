// const franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies() {
//     return [1, 2, 3].map(function(number) {
//       return `${this.name} ${number}`;
//     }.bind(this));
//   },
// };


// console.log(franchise.allMovies());

// Using bind - note that you can't bind an arrow function to this.

// alternative - using the build in this optional argument

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }, this);
  },
};


console.log(franchise.allMovies());