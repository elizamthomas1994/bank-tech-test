const Deposit = require('./deposit');
const Withdraw = require('./withdraw');
const Statement = require('./statement');

class Account {
  constructor(balance) {
    this.balance = balance;
    this.recordedTransactions = [];
    this.date = new Date().toLocaleDateString;
  }

  checkBalance() {
    return this.balance;
  }

  deposit(amount) {
    const depositInstance = new Deposit(this.balance, amount);
    depositInstance.depositFunds();

    this.balance = depositInstance.balance;
    this.recordedTransactions.push(depositInstance);
  }

  withdraw(amount) {
    const withdrawInstance = new Withdraw(this.balance, amount);
    withdrawInstance.withdrawFunds();

    this.balance = withdrawInstance.balance;
    this.recordedTransactions.push(withdrawInstance);
  }

  displayStatement() {
    const statement = new Statement(this.recordedTransactions);
    return statement.display();
  }
}

module.exports = Account;