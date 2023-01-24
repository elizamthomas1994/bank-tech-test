class Withdraw {
  constructor(balance, amount) {
    this.balance = balance;
    this.date = new Date().toLocaleDateString();
    this.debitedAmount = amount;
    this.creditedAmount = ' ';
  }

  withdrawFunds() {
    if ((this.balance - this.debitedAmount) < 0) {
      throw new Error("Not enough funds in account!")
    } else {
      this.balance -= this.debitedAmount;
    }
  }
}

module.exports = Withdraw;