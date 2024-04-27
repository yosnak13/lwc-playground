/**
 * Created by yoshihisanakai on 2024/04/26.
 */

import {api, LightningElement} from 'lwc';

export default class Augmentor extends LightningElement {
   @api startCounter = 0;

  handleStartChange(event) {
    this.startCounter = parseInt(event.target.value);
  }

  /*
  * Trailheadでは子コンポーネントを呼び指すことが目的。
  * c-numeratorコンポーネントのhtmlにメソッドの実装は行わないため、単体テストは作成してもmaximizeCounter()を呼び出せないことから、
  * 単体テストは作成せず、動作確認をする
  */
  handleMaximizeCounter() {
    this.template.querySelector('c-numerator').maximizeCounter();
  }
}
