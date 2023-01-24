class Deposit {
  constructor(balance) {
    this.balance = balance;
  }

  depositFunds(funds) {
    const depositTracker = []
    const date = new Date();

    this.balance += funds;

    depositTracker.push(date.toLocaleDateString()); // Stores date formatted as dd/mm/yyyy
    depositTracker.push(funds); // Stores amount credited to account
    depositTracker.push(''); // Stores amount debited to account
    depositTracker.push(this.balance); // Stores new balance of account

    // push depositTracker sub-array to primary account array
    console.log(depositTracker);
    console.log("Successfully deposited funds!");
  }
}

module.exports = Deposit;