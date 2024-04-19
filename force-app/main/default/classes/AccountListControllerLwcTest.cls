/**
 * Created by yoshihisanakai on 2024/04/19.
 */
@IsTest
private class AccountListControllerLwcTest {

  @IsTest
  static void testQueryAccountsByRevenue() {
    Decimal targetAnnualRevenue = 1000000;
    List<Account> testAccounts = new List<Account>();
    testAccounts.add(new Account(Name='Test Account 1', AnnualRevenue=2000000));
    testAccounts.add(new Account(Name='Test Account 2', AnnualRevenue=1500000));
    testAccounts.add(new Account(Name='Test Account 3', AnnualRevenue=800000));
    insert testAccounts;

    Test.startTest();
    List<Account> resultAccounts = AccountListControllerLwc.queryAccountsByRevenue(targetAnnualRevenue);
    Test.stopTest();

    System.assertEquals(2, resultAccounts.size(), '年間収益が指定値以上のアカウントが正しく返されていること');
  }
}
