const Statement = require('./Statement');

describe('Statement', () => {
  it ('adds data to account array', () => {
    const statement = new Statement();
    
    statement.recordData(['14/01/23', '', 500.00, 2500.00]);

    expect(statement.account).toEqual([['14/01/23', '', 500.00, 2500.00]]);
  });
});