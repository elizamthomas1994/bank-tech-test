class Statement {
  constructor(transactions) {
    transactions = transactions;
  }

  display() {
    const header = "Date || Credit || Debit || Balance";
    return header;
  }
}

module.exports = Statement;