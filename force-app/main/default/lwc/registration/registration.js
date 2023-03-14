import { LightningElement,track } from 'lwc';
import createrecord from '@salesforce/apex/Class1.saveAccountRecord';
import {NavigationMixin} from "lightning/navigation";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Registration extends LightningElement {
    @track error;
    @track TravellersName;
    @track Source;
    @track  Destination;



    handlechange(event) {
        this.TravellersName = event.target.value;
    }
    handlesource(event) {
        this.Source = event.target.value;
    }
    handleDestination(event) {
        this.Destination = event.target.value;
    }
    handleSave(){
        createrecord({
             arg1: this.TravellersName,
             arg3: this.Source,
             arg4: this.Destination,
            })
            .then(result => {
                console.log('success');
             
            }).catch(error => {
             console.log('errorrr     '+error.body.message);
             this.errormsg = error.body.message;
             })
    }

}
   