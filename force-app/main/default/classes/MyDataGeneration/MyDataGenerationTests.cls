/**
 * Created by yoshihisanakai on 2024/05/15.
 */

@IsTest
private class MyDataGenerationTests {
  @TestSetup
  static void loadTestData() {
    // GIVEN
    Test.loadData(Account.SObjectType, 'otherAccountData');
  }
  @IsTest
  static void testLoadOtherAccountsFromStaticResource() {
    // WHEN
    List<Account> accts = [SELECT Id FROM Account];
    // THEN
    Assert.isTrue(accts.size() == 15, 'Expected 15 accounts');
  }
}
