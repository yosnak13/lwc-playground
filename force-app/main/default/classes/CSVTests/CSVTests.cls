/**
 * Created by yoshihisanakai on 2024/05/15.
 */

@IsTest
private class CSVTests {
  @TestSetup
  static void loadTestDataFromStaticResource() {
    // GIVEN
    List<SObject> accounts = Test.loadData(Account.SObjectType, 'accountData');
  }
  @IsTest
  static void testLoadAccountsFromStaticResource() {
    // WHEN
    List<Account> accts = [SELECT Id FROM Account];
    // THEN
    Assert.isTrue(accts.size() == 3, 'Expected 3 accounts');
  }
}
