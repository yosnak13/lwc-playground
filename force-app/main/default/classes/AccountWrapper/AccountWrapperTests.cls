/**
 * Created by yoshi on 2024/06/01.
 */

@IsTest
private class AccountWrapperTests {
  @TestSetup
  static void loadTestData() {
    // GIVEN
    Account acct = new Account(Name = 'ACME');
    insert acct;
    List<Opportunity> opps = TestFactory.generateOppsForAccount(acct.Id, 1000.00, 5);
    insert opps;
  }

  @IsTest
  static void testPositiveRoundedAveragePrice() {
    // WHEN
    Account acct = [SELECT Id FROM Account LIMIT 1];
    AccountWrapper acctWrapper = new AccountWrapper(acct);
    // THEN
    Test.startTest();
    Assert.areEqual(
        acctWrapper.getRoundedAvgPriceOfOpps(),
        1000.00,
        'Expected to get 1000.00');
    Test.stopTest();
  }

  @IsTest
  static void testIsHighPriority() {
    Account acct = [SELECT Id FROM Account LIMIT 1];
    AccountWrapper acctWrapper = new AccountWrapper(acct);
    Test.startTest();
    Assert.isFalse(acctWrapper.isHighPriority());
    Test.stopTest();
  }

  @IsTest
  static void testIsHighPriorityTrue() {
    Opportunity oppo = [SELECT Id, AccountId FROM Opportunity WHERE Amount > 100000.00 LIMIT 1];
    Id AccountId = oppo.AccountId;
    Account acct = [SELECT Id FROM Account WHERE Id = :AccountId];
    AccountWrapper acctWrapper = new AccountWrapper(acct);

    Test.startTest();
    Assert.isTrue(acctWrapper.isHighPriority());
    Test.stopTest();
  }
}
