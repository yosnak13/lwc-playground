/**
 * Created by yoshihisanakai on 2024/04/19.
 */

public with sharing class AccountListControllerLwc {

  @AuraEnabled(Cacheable=true)
  public static List<Account> queryAccountsByRevenue(Decimal annualRevenue) {
    String query = 'SELECT Name FROM Account WHERE AnnualRevenue >= ' +
        String.escapeSingleQuotes(annualRevenue.toString());

    return Database.query(query);
    // MEMO: Trailhead合格用のクエリ。合格後は以下のクエリでなければ合格できない事実を残すため、コメントアウトしておく。
    //    return [
    //        SELECT Name FROM Account
    //        WHERE AnnualRevenue >= :annualRevenue
    //    ];
  }
}
