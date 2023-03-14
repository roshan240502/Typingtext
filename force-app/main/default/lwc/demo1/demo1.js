import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/demo.getAccounts';
const COLUMNS = [ 
    {label:'Account Name',fieldName:'Name'},
    {label:'Annual Revenue',fieldName:'AnnualRevenue',type:'Currency'},
    {label:'Industry',fieldName:'Industry',type:'text'},
    {label:'Phone',fieldName:'Phone',type:'phone'}
];

export default class Demo1 extends LightningElement {
    tableData
    columns=COLUMNS
    @wire(getAccounts)
    accountHandler({error,data}){ 
        if(data){
            console.log(data)
            this.tableData=data
        }
        if(error){
            console.error(error);
        }
    }
}