const Account = require('../lib/account');

describe('Account', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('01/01/2023'));
  })
  
  afterAll(() => {
    jest.useRealTimers();
  })

  it ('displays current account balance', () => {
    const account = new Account(0.00);

    expect(account.checkBalance()).toBe(0.00);
  });
  
  it ('records all account deposits', () => {
    const account = new Account(1250.00);
    
    account.deposit(500.25);

    expect(account.recordedTransactions).toEqual([{"balance": 1750.25, "creditedAmount": 500.25, "date": '01/01/2023', "debitedAmount": ' '}])
  });

  it ('records all account withdrawals', () => {
    const account = new Account(5000.00);
    
    account.withdraw(499.25);

    expect(account.recordedTransactions).toEqual([{"balance": 4500.75, "creditedAmount": ' ', "date": '01/01/2023', "debitedAmount": 499.25}])
  });

  it ('displays statement', () => {
    const account = new Account(0.00);
    account.deposit(100.00);
    account.deposit(500.00);
    account.withdraw(50.00);

    expect(account.displayStatement()).toContain("date || credit || debit || balance\n")
  })
});