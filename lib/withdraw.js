class Withdraw {
  constructor(balance) {
    this.balance = balance;
  }

  withdrawFunds(funds) {
    if ((this.balance - funds) < 0) {
      throw new Error("Not enough funds in account!")
    } else {
      this.balance -= funds;
    }
  }
}

module.exports = Withdraw;