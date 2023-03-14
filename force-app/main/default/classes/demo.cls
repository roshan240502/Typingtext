public with sharing class demo {
    public demo() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() { 
        return [SELECT ID, NAME, AnnualRevenue, Industry, Phone FROM Account];
    }
}