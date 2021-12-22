// Question 1

let invoices = {
  unpaid: [],
}

// Question 2

invoices.add = function(name, amount) {
  this.unpaid.push({
    name, 
    amount,
  });
};


console.log(invoices.unpaid);

// Question 3

invoices.totalDue = function() {
  return this.unpaid.reduce((accumulator, account) => accumulator + account.amount, 0);
}

// Question 4


invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());

// Question 5

invoices.paid = [];

invoices.payInvoice = function(name) {
  let unpaid = [];

  this.unpaid.forEach(account => {
    if (account.name === name) {
      this.paid.push(account);
    } else {
      unpaid.push(account);
    }
  });

  this.unpaid = unpaid;
};

console.log(invoices);

// Question 6

invoices.totalPaid = function() {
  return this.paid.reduce((accumulator, account) => accumulator + account.amount, 0);
}

console.log(invoices.totalPaid());

// Question 7

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());