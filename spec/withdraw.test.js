const Withdraw = require('./lib/withdraw');

describe('Withdraw', () => {
  it ('deducts funds from the bank balance', () => {
    const withdraw = new Withdraw();
    withdraw.balance = 5000;

    withdraw.withdrawFunds(1000);

    expect(withdraw.balance).toBe(4000);
  });

  it ('can be called multiple times in one go', () => {
    const withdraw = new Withdraw();
    withdraw.balance = 10000.00;

    withdraw.withdrawFunds(7000.00);
    withdraw.withdrawFunds(2000.00);

    expect(withdraw.balance).toBe(1000.00);
  });

  it ('can withdraw more specific values', () => {
    const withdraw = new Withdraw();
    withdraw.balance = 7575.75;

    withdraw.withdrawFunds(243.62);

    expect(withdraw.balance).toBe(7332.13);
  })

  it ('throws an error if withdrawing from empty account', () => {
    const withdraw = new Withdraw();
    withdraw.balance = 0.00;

    try {
      (withdraw.withdrawFunds(500.00));
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Not enough funds in account!")
    }
  })

  it ('throws an error if withdrawl amount is greater than balance', () => {
    const withdraw = new Withdraw();
    withdraw.balance = 5550.00;

    try {
      (withdraw.withdrawFunds(7500.00));
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Not enough funds in account!")
    }
  })
});