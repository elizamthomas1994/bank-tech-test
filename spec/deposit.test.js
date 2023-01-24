const Deposit = require('../lib/deposit');

describe('Deposit', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('01/01/2023'));
  })
  
  afterAll(() => {
    jest.useRealTimers();
  })

  it ('adds funds to empty bank balance', () => {
    const deposit = new Deposit(0.00, 1000.00);

    deposit.depositFunds();

    expect(deposit.balance).toBe(1000.00);
  });

  it ('adds further funds to existing bank balance', () => {
    const deposit = new Deposit(2255.00, 745.00);

    deposit.depositFunds();

    expect(deposit.balance).toBe(3000.00);
  });

  it ('can deposit more specific values', () => {
    const deposit = new Deposit (5124.23, 532.51);

    deposit.depositFunds();

    expect(deposit.balance).toBe(5656.74);
  })

  it ('records date that deposit is made', () => {
    const deposit = new Deposit (0.00, 100.00);

    deposit.depositFunds();

    expect(deposit.date).toBe('01/01/2023');
  })
});