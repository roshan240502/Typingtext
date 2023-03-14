public with sharing class Class1 {
    public Class1() {

    }
    @AuraEnabled
    public static void saveAccountRecord(String arg1, String arg3, String arg4){
        try{
            Travelportal__c obj = new Travelportal__c(
                TravellersName__c = arg1,
                Source__c = arg3,
                Destination__c = arg4
                );
            insert obj;
        }
        catch(Exception ex) {
            throw new AuraHandledException(ex.getMessage());
        }
    }
    /*@AuraEnabled
    public static void methodName(String travellersName, integer travllersAge, String source, String destination, String date1){
        try {
        Travelportal__c obj = new Travelportal__c();
        obj.TravellersName__c = travellersName;
        obj.TravllersAge__c = travllersAge;
        obj.Source__c = source;
        obj.Destination__c = destination;
        obj.StartingDate__c = System.today();
        insert obj;
    }@
        catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }*/

}