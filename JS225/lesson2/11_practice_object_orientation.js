// Question 1

let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,
};

let drill = {
  id: 1,
  name: 'Cordless Drill',
  stock: 15,
  price: 45,
};

// Question 2

function setPrice(product, price) {
  if (price >= 0) {
    product.price = price;
  } else {
    console.log('Invalid price.');
  }
}

// Question 3
function describeProduct(product) {
  console.log('Name: ' + product.name);
  console.log('ID: ' + product.id);
  console.log('Price: $' + product.price);
  console.log('Stock: ' + product.stock);
}

// Question 4 - 6

function createProduct(id, name, stock, price) {
  return {
    id, 
    name, 
    stock, 
    price,
    setPrice(newPrice) {
      if (newPrice >= 0) {
        this.price = newPrice;
      } else {
        alert('Invalid price!');
      }
    },
    describe() {
      console.log('Name: ' + this.name);
      console.log('ID: ' + this.id);
      console.log('Price: $' + this.price);
      console.log('Stock: ' + this.stock);
    },
  }
}

let saw = createProduct(2, 'Circular Saw', 12, 95);
let hammer = createProduct(3, 'Sledge Hammer', 78, 45);
let boxCutter = createProduct(4, 'Box Cutter', 41, 15);
