class Deposit {
  constructor(balance, amount) {
    this.date = new Date().toLocaleDateString();
    this.balance = balance;
    this.amount = amount
  }

  depositFunds() {
    this.balance += this.amount;
  }
}

module.exports = Deposit;