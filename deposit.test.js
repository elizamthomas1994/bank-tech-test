const Deposit = require('./Deposit');

describe('Deposit', () => {
  it ('adds funds to empty bank balance', () => {
    const deposit = new Deposit();
    deposit.balance = 0.00;

    deposit.depositFunds(1000.00);

    expect(deposit.balance).toBe(1000.00);
  });

  it ('adds further funds to existing bank balance', () => {
    const deposit = new Deposit();
    deposit.balance = 2255.00;

    deposit.depositFunds(745.00);

    expect(deposit.balance).toBe(3000.00);
  });

  it ('can deposit more specific values', () => {
    const deposit = new Deposit ();
    deposit.balance = 5124.23

    deposit.depositFunds(532.51);

    expect(deposit.balance).toBe(5656.74);
  })

  it ('can be called multiple times in one go', () => {
    const deposit = new Deposit();
    deposit.balance = 1000.00;

    deposit.depositFunds(450.00);
    deposit.depositFunds(550.00);

    expect(deposit.balance).toBe(2000.00);
  });
});