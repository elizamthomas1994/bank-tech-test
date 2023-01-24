const Statement = require('../lib/statement');

describe('Statement', () => {
  xit ('displays header information', () => {
    const statement = new Statement([]);

    expect(statement.display()).toBe("Date || Credit || Debit || Balance");
  });

});