/**
 * Created by yoshihisanakai on 2024/04/26.
 */

import {api, LightningElement} from 'lwc';

export default class Augmentor extends LightningElement {
   @api startCounter = 0;

  handleStartChange(event) {
    this.startCounter = parseInt(event.target.value);
  }
}
