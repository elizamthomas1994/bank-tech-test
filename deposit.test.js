const Deposit = require('./Deposit');

describe('Deposit', () => {
  it ('adds funds to empty bank balance', () => {
    const deposit = new Deposit();
    deposit.balance = 0;

    expect(deposit.addDeposit(1000)).toBe(1000);
  });

  it ('adds further funds to existing bank balance', () => {
    const deposit = new Deposit();
    deposit.balance = 2255;

    expect(deposit.addDeposit(745)).toBe(3000);
  });

  // it ('can be called multiple times in one go', () => {
   
  // });
});