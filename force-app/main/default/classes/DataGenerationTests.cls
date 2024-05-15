/**
 * Created by yoshihisanakai on 2024/05/15.
 * https://trailhead.salesforce.com/ja/content/learn/modules/unit-testing-on-the-lightning-platform/generate-data-for-tests?trailmix_creator_id=welcome4&trailmix_slug=architect-dev-lifecycle-and-deployment-ja
 */

@IsTest
public with sharing class DataGenerationTests {

  @IsTest
  static void testBruteForceAccountCreation() {
    // GIVEN
    List<Account> acts;
    Account a = new Account(Name='McTesterson LLC');
    insert a;
    // WHEN
    Test.startTest();
    acts = [SELECT Id FROM Account];
    Test.stopTest();
    // THEN
    Assert.isTrue(acts.size() > 0, 'Was expecting to find at least one account');
  }
}
