/**
 * Created by yoshihisanakai on 2024/04/19.
 * https://trailhead.salesforce.com/ja/content/learn/modules/lwc-for-visualforce-developers/handle-user-actions-in-javascript?trail_id=build-lightning-web-components
 */

import {api, LightningElement} from 'lwc';

export default class AccountSearch extends LightningElement {
  @api numberOfEmployees = null;

  handleChange(event) {
    this.numberOfEmployees = event.detail.value;
  }

  reset() {
    this.numberOfEmployees = null;
  }
}