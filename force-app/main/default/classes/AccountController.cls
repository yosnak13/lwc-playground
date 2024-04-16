public with sharing class AccountController {
  @AuraEnabled(Cacheable=true)
  public static List<Account> getAccounts() {
    // 一時的なテスト
    throw new AuraHandledException('Forced error');
//    return [
//        SELECT Name, AnnualRevenue, Industry
//        FROM Account
//        WITH SECURITY_ENFORCED
//        ORDER BY Name
//    ];
  }
}