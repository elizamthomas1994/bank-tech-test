const Statement = require('../lib/statement');

describe('Statement', () => {
  it ('displays only column information if no transaction data given', () => {
    const statement = new Statement([]);

    expect(statement.display()).toBe("Date || Credit || Debit || Balance");
  });

});