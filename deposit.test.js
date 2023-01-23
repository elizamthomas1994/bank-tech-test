const Deposit = require('./Deposit');

describe('Deposit', () => {
  it ('adds funds to empty bank balance', () => {
    const deposit = new Deposit();
    deposit.balance = 0;

    deposit.depositFunds(1000);

    expect(deposit.balance).toBe(1000);
  });

  it ('adds further funds to existing bank balance', () => {
    const deposit = new Deposit();
    deposit.balance = 2255;

    deposit.depositFunds(745);

    expect(deposit.balance).toBe(3000);
  });

  it ('can be called multiple times in one go', () => {
    const deposit = new Deposit();
    deposit.balance = 1000;

    deposit.depositFunds(450);
    deposit.depositFunds(550);

    expect(deposit.balance).toBe(2000);
  });
});