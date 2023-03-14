public with sharing class LoginController {
    public LoginController() {
    }
   @AuraEnabled
   public static void createRecord(String arg3, String arg4)
   {
   try {
    OmniCloud__c register = new OmniCloud__c(Email__c = arg3, Password__c = arg4 );
   insert register;
   }
   catch (Exception e)
   {
    throw new AuraHandledException(e.getMessage());
   }
   }
   @AuraEnabled(cacheable=true)
   public static List<OmniCloud__c> getRegisterList() {
   return [SELECT Id,Email__c, Password__c FROM OmniCloud__c];
   }
   @AuraEnabled
   public static void updateRecord(String idreturn , String repassword){
   try {
     OmniCloud__c Updated = new OmniCloud__c(
   Id = idreturn,
   Password__c = repassword
   );
   update Updated;
   }
   catch (Exception e) {
   throw new AuraHandledException(e.getMessage());
   }
   }
 }