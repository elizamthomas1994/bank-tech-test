const Statement = require('../lib/statement');

describe('Statement', () => {
  it ('displays only column information if no transaction data given', () => {
    const statement = new Statement([]);

    expect(statement.display()).toBe("date || credit || debit || balance\n");
  });

  it ('displays information about recorded deposit', () => {
    const statement = new Statement([{"balance": 1750.25, "creditedAmount": 500.25, "date": '24/01/2023', "debitedAmount": ' '}])

    expect(statement.display()).toContain("date || credit || debit || balance\n24/01/2023 || 500.25 ||   || 1750.25");
  })

  it ('displays information about recorded withdrawal', () => {
    const statement = new Statement([{"balance": 4500.75, "creditedAmount": ' ', "date": '24/01/2023', "debitedAmount": 499.25}])

    expect(statement.display()).toContain("date || credit || debit || balance\n24/01/2023 ||   || 499.25 || 4500.75");
  })
});