public with sharing class Records{
    public String travellersName {get; set;}
    public String travllersAge {get; set;}
    public String source {get; set;}
    public String destination {get; set;}
    public String startingDate {get; set;}
    
        
    public void register() {
        Travelportal__c obj = new Travelportal__c();
        obj.TravellersName__c = 'M Radha Sunidhi';
        obj.TravllersAge__c = 21;
        obj.Source__c = 'Hyderabad';
        obj.Destination__c = 'Kedarnath';
        obj.StartingDate__c = System.today();
        insert obj;
    }
}
            


