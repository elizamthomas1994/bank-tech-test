const Statement = require('../lib/statement');

describe('Statement', () => {
  it ('displays header information', () => {
    const statement = new Statement([]);

    expect(statement.display()).toBe("Date || Credit || Debit || Balance");
  });

});