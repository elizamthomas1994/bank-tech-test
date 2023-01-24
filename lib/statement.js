class Statement {
  constructor(transactions) {
    this.transactions = transactions;
  }

  display() {
    const columns = "Date || Credit || Debit || Balance";

    const transactionInfo = this.transactions.map(transaction => {
      return `${transaction.date} || ${transaction.amount.toFixed(2)} || ${transaction.balance}`
    })

    return columns + transactionInfo.join('');
  }
}

module.exports = Statement;