/**
 * Created by yoshihisanakai on 2024/04/22.
 */

import {api, LightningElement} from 'lwc';

export default class Button extends LightningElement {
  @api label;
  @api icon;

  handleButton(event) {
    this.dispatchEvent(new CustomEvent('buttonclick', {
      bubbles: true
    }));
  }
}
