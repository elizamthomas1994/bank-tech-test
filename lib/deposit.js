class Deposit {
  constructor(balance) {
    this.balance = balance;
  }

  depositFunds(funds) {
    this.balance += funds;
  }
}

module.exports = Deposit;