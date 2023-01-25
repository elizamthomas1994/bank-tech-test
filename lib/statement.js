class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  display() {
    const columns = "date || credit || debit || balance\n";

    const transactionInfo = this.transactions.map(transaction => {
      if (transaction.creditedAmount == ' ') {
        return `${transaction.date} || ${transaction.creditedAmount} || ${transaction.debitedAmount.toFixed(2)} || ${transaction.balance}\n`
      } else {
        return `${transaction.date} || ${transaction.creditedAmount.toFixed(2)} || ${transaction.debitedAmount} || ${transaction.balance}\n`
      }
    })

    return columns + transactionInfo.join('');
  }
}

module.exports = Statement;