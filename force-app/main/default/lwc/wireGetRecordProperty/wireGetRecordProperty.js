/**
 * Created by yoshihisanakai on 2024/04/16.
 * 学習用コードのため利用不可
 */

import {LightningElement, api, wire} from 'lwc';
import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';

export default class WireGetRecordProperty extends LightningElement {
  @api recordId;
  @wire(getRecord, {recordId: '$recordId', fields: [ACCOUNT_NAME_FIELD]})
  account;

  get name() {
    return getFieldValue(this.account.data, ACCOUNT_NAME_FIELD);
  }
}
