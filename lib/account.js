const Deposit = require('./deposit');
const Withdraw = require('./withdraw');

class Account {
  constructor(balance) {
    this.balance = balance;
    this.recordedTransactions = [];
    this.date = new Date()
  }

  checkBalance() {
    return this.balance;
  }

  deposit(amount) {
    const deposit = new Deposit(this.balance);
    deposit.depositFunds(amount);

    const depositData = []
    
    depositData.push(this.date.toLocaleDateString()) // stores date formatted as dd/mm/yyyy
    depositData.push(amount) // stores amount credited to account
    depositData.push(' ') // stores amount debited to account
    depositData.push(deposit.balance);

    this.balance = deposit.balance;
    this.recordedTransactions.push(depositData);
  }

  withdraw(amount) {
    const withdraw = new Withdraw(this.balance);
    withdraw.withdrawFunds(amount);

    const withdrawData = []
    
    withdrawData.push(this.date.toLocaleDateString()) // stores date formatted as dd/mm/yyyy
    withdrawData.push(amount) // stores amount credited to account
    withdrawData.push(' ') // stores amount debited to account
    withdrawData.push(withdraw.balance);

    this.balance = withdraw.balance;
    this.recordedTransactions.push(withdrawData);
  }
}

module.exports = Account;