import {LightningElement} from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME from '@salesforce/schema/Account.Name';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY from '@salesforce/schema/Account.Industry';

export default class AccountCreator extends LightningElement {
  objectApiName = ACCOUNT_OBJECT;
  fields = [NAME, REVENUE, INDUSTRY];

  handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
      title: "Account created",
      message: "Record ID: " + event.detail.id,
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
  }
}