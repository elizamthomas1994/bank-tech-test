const Withdraw = require('../lib/withdraw');

describe('Withdraw', () => {
  it ('deducts funds from the bank balance', () => {
    const withdraw = new Withdraw(5000, 1000);

    withdraw.withdrawFunds();

    expect(withdraw.balance).toBe(4000);
  });

  it ('can withdraw more specific values', () => {
    const withdraw = new Withdraw(7575.75, 243.62);

    withdraw.withdrawFunds();

    expect(withdraw.balance).toBe(7332.13);
  })

  it ('throws an error if withdrawing from empty account', () => {
    const withdraw = new Withdraw(0.00, 500.00);

    try {
      (withdraw.withdrawFunds());
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Not enough funds in account!")
    }
  })

  it ('throws an error if withdrawl amount is greater than balance', () => {
    const withdraw = new Withdraw(5500.00, 7500.00);

    try {
      (withdraw.withdrawFunds());
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe("Not enough funds in account!")
    }
  })
});