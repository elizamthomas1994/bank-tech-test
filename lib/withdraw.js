class Withdraw {
  constructor(balance, amount) {
    this.balance = balance;
    this.date = new Date().toLocaleDateString();
    this.amount = amount;
  }

  withdrawFunds() {
    if ((this.balance - this.amount) < 0) {
      throw new Error("Not enough funds in account!")
    } else {
      this.balance -= this.amount;
    }
  }
}

module.exports = Withdraw;