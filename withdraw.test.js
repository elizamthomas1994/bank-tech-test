const Withdraw = require('./Withdraw');

describe('Withdraw', () => {
  it ('deducts funds from the bank balance', () => {
    const withdraw = new Withdraw();
    withdraw.balance = 5000;

    withdraw.withdrawFunds(1000);

    expect(withdraw.balance).toBe(4000);
  });

  it ('can be called multiple times in one go', () => {
    const withdraw = new Withdraw();
    withdraw.balance = 10000;

    withdraw.withdrawFunds(7000);
    withdraw.withdrawFunds(2000);

    expect(withdraw.balance).toBe(1000);
  });

  it ('throws an error if withdrawing from empty account', () => {
    const withdraw = new Withdraw();
    withdraw.balance = 0;

    try {
      (withdraw.withdrawFunds(500));
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Not enough funds in account!")
    }
  })
});