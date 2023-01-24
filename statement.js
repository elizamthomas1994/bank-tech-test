class Statement {
  constructor() {
    this.account = [];
  }

  recordData(dataArray) {
    this.account.push(dataArray);
  }
}

module.exports = Statement;