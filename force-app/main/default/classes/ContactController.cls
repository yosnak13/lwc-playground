public with sharing class ContactController {

  // 学習用メソッド
  @AuraEnabled(Cacheable=true)
  public static List<Contact> getContactsBornAfter(Date birthDate) {
    return [
        SELECT Name, Title, Email, Phone
        FROM Contact
        WHERE Birthdate > :birthDate
        WITH SECURITY_ENFORCED
    ];
  }

  @AuraEnabled(Cacheable=true)
  public static List<Contact> getContacts() {
    return [
        SELECT FirstName, LastName, Email
        FROM Contact
    ];
  }
}