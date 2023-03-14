import { LightningElement, wire } from 'lwc';
import { NavigationMixin } from "lightning/navigation";

import loginUser from '@salesforce/apex/LoginController.getRegisterList';


export default class LoginController extends NavigationMixin (LightningElement) {
    
    record;
    // handleRegister() {
    //    this[NavigationMixin.Navigate]({
    //          type: 'standard__recordPage',
    //         attributes: {
    //             recordId: 'recordId',
    //              objectApiName: "OmniCloud__c",
    //              actionName: 'view'

    //         }
    //     });
    // }

 

    @wire(loginUser) OmniCloud__c;

    email;
    Password;
    handleEmail(e) {
        this.email = e.target.value;
    }
    handlePassword(e) {
        this.Password = e.target.value;
    }
    handleRegister(event) {
        let flag = false;
        console.log('before if');
        if (this.email != null && this.Password != null) {
            console.log('email-->'+this.email);
            console.log('password-->'+this.Password);
            for (let i = 0; i < this.OmniCloud__c.data.length; i++) {
                if (this.email == this.OmniCloud__c.data[i].Email__c && this.Password == this.OmniCloud__c.data[i].Password__c) {
                   //record = this.OmniCloud__c.data[i].Id;
                   console.log('Result-->'+this.OmniCloud__c.data[i].Id);
                    flag = true;
                    alert("You're login is Successful!!!!...");

                    this[NavigationMixin.Navigate]({
                        type: 'standard__recordPage',
                        attributes: {
                            recordId: this.OmniCloud__c.data[i].Id,
                             objectApiName: "OmniCloud__c",
                             actionName: 'view'
                        } 
                    });
                }
            }
            if (flag == false) {
                alert('Wrong UserName or Password....Please provide the correct details to login')
            }
        }
        else {
            alert('All the fields need to filled')
        }
    }

}