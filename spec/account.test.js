const Account = require('../lib/account');

describe('Account', () => {
  it ('displays current account balance', () => {
    const account = new Account(0.00);

    expect(account.accountBalance()).toBe(0.00);
  });
});