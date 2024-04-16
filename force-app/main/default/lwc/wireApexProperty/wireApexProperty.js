/**
 * Created by yoshihisanakai on 2024/04/16.
 * 学習用コードのため利用不可
 */

import {LightningElement, api, wire} from 'lwc';
import getContactsBornAfter from '@salesforce/apex/ContactController.getContactsBornAfter';

export default class WireApexProperty extends LightningElement {
  @api minBirthDate;
  @wire(getContactsBornAfter, {birthDate: '$minBirthDate'})
  contacts;

  // 学習用のため使用しない。
  // Link: https://trailhead.salesforce.com/ja/content/learn/modules/lightning-web-components-and-salesforce-data/handle-server-errors?trail_id=build-lightning-web-components
  get errors() {
    return (this.contacts.error) ?
      reduceErrors(this.contacts.error) : [];
  }
}