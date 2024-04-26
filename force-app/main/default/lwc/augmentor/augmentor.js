/**
 * Created by yoshihisanakai on 2024/04/26.
 */

import {LightningElement} from 'lwc';

export default class Augmentor extends LightningElement {
  startCounter = 0;

  handleStartChange(event) {
    this.startCounter = parseInt(event.target.value);
  }
}
