public with sharing class AccountController {
  @AuraEnabled(Cacheable=true)
  public static List<Account> getAccounts() {
    return [
        SELECT Name, AnnualRevenue, Industry
        FROM Account
        WITH SECURITY_ENFORCED
        ORDER BY Name
    ];
  }

  // wireApex.jsの練習用メソッド
  @AuraEnabled(Cacheable=true)
  public static List<Account> getAccountList() {
    return [
        SELECT Name, AnnualRevenue, Industry
        FROM Account
        WITH SECURITY_ENFORCED
        ORDER BY CreatedDate
    ];
  }
}