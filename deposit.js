class Deposit {
  constructor(balance) {
    this.balance = balance;
  }

  addDeposit(funds) {
    return (funds + this.balance);
  }
}

module.exports = Deposit;