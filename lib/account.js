var account = require('./locales/common/account');

/**
 * namespace ngFaker.account
 */
function Account(ngFaker) {
  /**
   * returns a random bank in Nigeria
   *
   * @method bank
   * @returns {string} random bank
   */
  this.bank = function () {
    return ngFaker.random.arrayElement(account.banks);
  };

  /**
   * returns a random account number
   *
   * @method accountNumber
   * @returns {string} random accountNumber
   */
  this.accountNumber = function () {
    var accountNumber = '';
    for (var i = 0; i < 10; i++) {
      accountNumber += ngFaker.random.number({ min: 0, max: 9 });
    }
    return accountNumber;
  };

  /**
   * Returns a valid 11-digit BVN.
   * @method bvn
   * @returns {string} random BVN
   */
  this.bvn = function () {
    let bvn = '';
    bvn += ngFaker.random.number({ min: 1, max: 9 }); // Ensure first digit is not 0
    for (let i = 1; i < 11; i++) {
      bvn += ngFaker.random.number({ min: 0, max: 9 });
    }
    return bvn;
  };
}

module.exports = Account;
