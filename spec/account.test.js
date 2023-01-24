const Account = require('../lib/account');

describe('Account', () => {
  it ('displays current account balance', () => {
    const account = new Account(0.00);

    expect(account.accountBalance()).toBe(0.00);
  });

  it ('records all account deposits', () => {
    const account = new Account(1250.00);
    
    account.deposit(500.25);

    expect(account.recordedTransactions).toEqual([['24/01/2023', 500.25, ' ', 1750.25]])
  })
});