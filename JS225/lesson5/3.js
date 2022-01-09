// Problem 1

// - can't tell whether the object is created by any function
// - each object owns a copy of the same methods

// Problem 2 

function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

// Problem 3

// let invoice = {
//   phone: 3000,
//   internet: 6500,
// };

// let payment = {
//   phone: 1300,
//   internet: 5500,
// };

// let invoiceTotal = invoice.phone + invoice.internet;
// let paymentTotal = payment.phone + payment.internet;
// let remainingDue = invoiceTotal - paymentTotal;

// console.log(paymentTotal);
// console.log(remainingDue);

function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return this.phone + this.internet;
    },
  };
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (let i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));