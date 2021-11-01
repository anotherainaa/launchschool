const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];



/* 

- find all transactions
- tally up the quantity
  - if in, + to quantity
  - if out, - to quantity
- return true if the quantity is more than 0, false if less than 0. 

*/


function isItemAvailable(itemID, transactions) {
  transactions = transactionsFor(itemID, transactions);
  let quantity = transactions.reduce((accumulator, transaction) => {
    if (transaction.movement === 'in') {
      return accumulator + transaction.quantity;
    } else if (transaction.movement === 'out') {
      return accumulator - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}

function transactionsFor(itemID, transactions) {
  return transactions.filter(transaction => transaction['id'] === itemID);
} 

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true