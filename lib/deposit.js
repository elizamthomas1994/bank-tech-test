class Deposit {
  constructor(balance, amount) {
    this.date = new Date().toLocaleDateString();
    this.balance = balance;
    this.debitedAmount = ' ';
    this.creditedAmount = amount;
  }

  depositFunds() {
    this.balance += this.creditedAmount;
  }
}

module.exports = Deposit;