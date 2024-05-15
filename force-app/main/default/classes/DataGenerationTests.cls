/**
 * Created by yoshihisanakai on 2024/05/15.
 * https://trailhead.salesforce.com/ja/content/learn/modules/unit-testing-on-the-lightning-platform/generate-data-for-tests?trailmix_creator_id=welcome4&trailmix_slug=architect-dev-lifecycle-and-deployment-ja
 */

@IsTest
public with sharing class DataGenerationTests {

  @IsTest
  static void testBruteForceAccountCreation() {
    // GIVEN
    List<Account> accts;
    List<Contact> contacts;
    TestFactory.generateAccountWithContacts(5);
    // WHEN
    Test.startTest();
    accts = [SELECT Id FROM Account];
    contacts = [SELECT Id FROM Contact];
    Test.stopTest();
    // THEN
    Assert.isTrue(accts.size() > 0, 'Was expecting to find at least one account');
    Assert.areEqual(5, contacts.size(), 'Was expecting to find 5 contacts');
  }
}
