// Inventory Item Transactions
// Write a function that takes two arguments, an inventory item ID and a list of transactions, and returns an array containing only the transactions for the specified inventory item.

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

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

/*

Input:
1 - number
    - representing the item id that we want to select    

2 - nested array
    - containing objects representing item transactions
      - id is a number representing ineventory item id
      - movement is `in` and `out` representing if is being put in the inventory or taken out of it. 
      - quantity is a number representing the quantity in that transaction? 

Output:
1 - nested array
    - the selected transactions for the given 


Data Structure
- Array to use array methods. 
- return object

Algorithm 
- select the transaction if the id is the same with the given id. 
- return array with the objects 

*/

function transactionsFor(itemID, transactions) {
  return transactions.filter(transaction => transaction['id'] === itemID);
} 

console.log(transactionsFor(101, transactions));