class Account {
  constructor() {
    this.balance = 0;
    this.recordedTransactions = [];
  }

  accountBalance() {
    return this.balance;
  }

  deposit(amount) {
    const deposit = newDeposit(this.balance);
    deposit.depositFunds(amount);

    const date = new Date();
    const depositData = []
    
    depositData.push(date.toLocaleDateString()) // stores date formatted as dd/mm/yyyy
    depositData.push(amount) // stores amount credited to account
    depositData.push(' ') // stores amount debited to account
    depositData.push(deposit.balance);

    this.balance = deposit.balance;
    this.recordedTransactions.push(depositData);
  }
}

module.exports = Account;