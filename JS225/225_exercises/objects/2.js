const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * (percent / 100);
    return this.price - discount;
  },
};

console.log(item.discount(20));
console.log(item.discount(50));
console.log(item.discount(25));

// Unexpected results - why?

// - we are overwriting(mutating) the price each time.
// - we can fix it by making we don't mutate the object 