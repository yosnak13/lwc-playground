/**
 * Created by yoshihisanakai on 2024/04/22.
 */

import {LightningElement} from 'lwc';

export default class Controls extends LightningElement {
  handleAdd() {
    this.dispatchEvent(new CustomEvent('add'));
  }

  handleSubtract() {
    this.dispatchEvent(new CustomEvent('subtract'));
  }
}
