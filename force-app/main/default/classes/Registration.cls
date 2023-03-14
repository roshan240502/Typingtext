public class Registration {
    /*public String travellersName {get; set;}
    public Integer travllersAge {get; set;}
    public String source {get; set;}
    public String destination {get; set;}
    public Date startingDate {get; set;}*/

   /* @AuraEnabled
    public static void methodName(String travellersName, String travllersAge, String source, String destination, String date){
        
            Travelportal__c obj = new Travelportal__c(
                TravellersName__c = travellersName;
                TravllersAge__c = travllersAge;
                Source__c = source;
                Destination__c = destination;
                StartingDate__c = date;
                 );
            insert obj;
        
    }*/
    @AuraEnabled
    public static void save() {
        Travelportal__c obj = new Travelportal__c();
        obj.TravellersName__c = travellersName;
        obj.TravllersAge__c = travllersAge;
        obj.Source__c = source;
        obj.Destination__c = destination;
        obj.StartingDate__c = System.today();
        insert obj;
    }
}
