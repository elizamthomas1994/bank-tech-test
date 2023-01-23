class Deposit {
  constructor(balance) {
    this.balance = balance;
  }

  depositFunds(funds) {
    return (this.balance += funds);
  }
}

module.exports = Deposit;