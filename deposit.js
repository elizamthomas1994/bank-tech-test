class Deposit {
  constructor(balance) {
    this.balance = balance;
  }

  addDeposit(funds) {
    return (this.balance += funds);
  }
}

module.exports = Deposit;