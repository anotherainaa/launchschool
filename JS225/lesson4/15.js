// Code example

let studentId = 0;

function generateStudentId() {
  studentId += 1;
  return studentId;
}

let generateStudentId2 = (function() {
  let studentId = 0;

  return function() {
    studentId += 1;
    return studentId;
  };
})();

let inventory = {
  stocks: [],
  stockCounts() {
    this.stocks.forEach(stock => {
      console.log(stock.name + ':' + String(stock.count));
    });
  },
};

inventory.stocks.push({
  name: 'Ballpen',
  count: 5,
});

inventory.stocks.push({
  name: 'Ballpen',
  count: 5,
});

inventory.stockCounts();

// ImprovedCode

let inventory2 = {
  stocks: [],
  stockCounts() {
    this.stocks.forEach(stock => {
      console.log(stock.name + ':' + String(stock.count));
    });
  },

  addStock(newStock) {
    let isValid = this.stocks.every(function(stock) {
      return newStock.name !== stock.name;
    });

    if (isValid) { this.stocks.push(newStock) }
  },
};

// Preventing stock from being accessed directly 

let inventory3 = (function() {
  let stocks = [];

  return {
    stockCounts() {
      stocks.forEach(stock => {
        console.log(stock.name + ':' + String(stock.count));
      });
    },


    addStock(newStock) {
      let isValid = stocks.every(function(stock) {
        return newStock.name !== stock.name;
      });

      if (isValid) { stocks.push(newStock) }
    },
  };
})();

inventory3.addStock({
  name: 'ballpen',
  count: 5,
});

inventory3.stockCounts();
// logs:
// ballpen: 5

inventory3.addStock({
  name: 'ballpen',
  count: 5,
});

inventory3.stockCounts();
// logs:
// ballpen: 5

// inventory3.stocks.push({
//   name: 'ballpen',
//   count: 5,
// });
// results in an error

// Final Refactor

let inventory4 = (function() {
  let stocks = [];
  function isValid(newStock) { // private function
    return stocks.every(stock => {
      return newStock.name !== stock.name;
    });
  }

  return {
    stockCounts() {
      stocks.forEach(stock => {
        console.log(stock.name + '' + String(stock.count));
      });
    },

    addStock(newStock) { // cleaned up and logic is easier to read
      if (isValid(newStock)) { stocks.push(newStock) }
    },
  };
})();