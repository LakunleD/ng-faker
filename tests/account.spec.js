if (typeof module !== 'undefined') {
  var ngfaker = require('../index');
  var fixtures = require('./fixtures');
  var account = fixtures.account;
}

describe('Account: ', function() {
  describe('Banks', function() {
    test('it should return a random bank', function() {
      var bank = ngfaker.account.bank();
      expect(account.banks.indexOf(bank)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Account Number', function() {
    test('it should return a account number', function() {
      var accountNumber = ngfaker.account.accountNumber();
      expect(accountNumber.length).toEqual(10);
    });
  });

  describe('BVN Generation', function() {
    test('it should return an 11-digit BVN', function() {
      var bvn = ngfaker.account.bvn();
      expect(bvn.length).toEqual(11);
      expect(bvn).toMatch(/^\d{11}$/);
    });

    test('it should not start with 0', function() {
      var bvn = ngfaker.account.bvn();
      expect(bvn[0]).not.toEqual('0');
    });
  });
});
