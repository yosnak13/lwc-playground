/**
 * Created by yoshihisanakai on 2024/04/17.
 */

import {LightningElement, wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class WireApex extends LightningElement {
  accounts;
  error;

  @wire(getAccountList)
  wiredAccounts({error, data}) {
    if (data) {
      this.accounts = data;
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.accounts = undefined;
    }
  }
}