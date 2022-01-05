// Project: Banking

function makeBank() {
  let accNumber = 101;
  let accounts = [];


  function makeAccount(accNumber) {
    let balance = 0;
    let transactions = [];

    return {
      number() {
        return accNumber;
      },

      balance() {
        return balance;
      },

      transactions() {
        return transactions;
      },

      deposit(amount) {
        balance += amount;

        let transaction = {
          type: 'deposit',
          amount: amount,
        }
        transactions.push(transaction);

        return amount;
      },

      withdraw(amount) {
        if (amount <= balance) {
          balance -= amount;
        } else {
          amount = balance;
          balance -= amount;
        }

        let transaction = {
          type: 'withdraw',
          amount: amount,
        }
        transactions.push(transaction);

        return amount;
      },
    };
  }

  return {
    openAccount() {
      let newAccount = makeAccount(accNumber);
      accounts.push(newAccount);
      accNumber += 1;
      return newAccount;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  }
}

let bank = makeBank();
let source = bank.openAccount();
source.deposit(10);
let destination = bank.openAccount();

let account1 = bank.openAccount();
account1.deposit(100);

let account2 = bank.openAccount();
account2.deposit(120);