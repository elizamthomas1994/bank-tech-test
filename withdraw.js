class Withdraw {
  constructor(balance) {
    this.balance = balance;
  }

  withdrawFunds(funds) {
    if ((this.balance - funds) < 0) {
      throw new Error("Not enough funds in account!")
    } else {
      const withdrawTracker = []
      const date = new Date();

      this.balance -= funds;

      withdrawTracker.push(date.toLocaleDateString()); // Stores date formatted as dd/mm/yyyy
      withdrawTracker.push(''); // Stores amount credited to account
      withdrawTracker.push(funds); // Stores amount debited to account
      withdrawTracker.push(this.balance); // Stores new balance of account

      // push depositTracker sub-array to primary account array
      console.log(withdrawTracker);
      console.log("Successfully withdrawn funds!");
    }
  }
}

module.exports = Withdraw;