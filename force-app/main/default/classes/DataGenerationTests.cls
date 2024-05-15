/**
 * Created by yoshihisanakai on 2024/05/15.
 * https://trailhead.salesforce.com/ja/content/learn/modules/unit-testing-on-the-lightning-platform/generate-data-for-tests?trailmix_creator_id=welcome4&trailmix_slug=architect-dev-lifecycle-and-deployment-ja
 */

@IsTest
private with sharing class DataGenerationTests {
  @TestSetup
  static void dataCreation() {
    // GIVEN
    Account a = TestFactory.getAccount('Muddy Waters Inc.', true);
    Contact c = TestFactory.getContact(a.Id, 'Muddy', 'Waters', true);
    Opportunity opp = new Opportunity();
    opp.Name = 'Long lost record';
    opp.AccountId = a.Id;
    opp.CloseDate = Date.today().addDays(14);
    opp.StageName = 'prospecting';
    insert opp;
  }

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
    Assert.areEqual(6, contacts.size(), 'Was expecting to find 6 contacts');
  }

  @IsTest
  static void testAtTestSetupMethodsRule() {
    // WHEN
    List<Opportunity> opps = [SELECT Id, AccountId FROM Opportunity];
    // THEN
    Assert.areEqual(1, opps.size(), 'Expected test to find a single Opp');
  }
}
