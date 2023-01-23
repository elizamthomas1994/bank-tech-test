class Withdraw {
  constructor(balance) {
    this.balance = balance;
  }

  withdrawFunds(funds) {
    return (this.balance -= funds);
  }
}

module.exports = Withdraw;