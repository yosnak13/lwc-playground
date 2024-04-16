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
}