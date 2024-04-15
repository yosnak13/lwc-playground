/**
 * Created by yoshihisanakai on 2024/04/03.
 */

public with sharing class MyContactListController {
  @AuraEnabled
  public static List<Contact> getContacts(Id recordId) {
    return [SELECT Id, FirstName, LastName, Email, Phone FROM Contact WHERE AccountId = :recordId];
  }
}