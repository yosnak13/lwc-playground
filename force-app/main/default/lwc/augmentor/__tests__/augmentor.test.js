/**
 * Created by yoshihisanakai on 2024/04/26.
 */

import {createElement} from 'lwc';
import Augmentor from "c/augmentor";

const INPUT_VALUE = '10';

describe('c-augmentor', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('success set startCounter by handleStartChange', () => {
    const ele = createElement('c-augment', {
      is: Augmentor
    });
    document.body.appendChild(ele);

    const inputElement = ele.shadowRoot.querySelector('lightning-input');
    inputElement.value = INPUT_VALUE;

    inputElement.dispatchEvent(new CustomEvent('change'));
    expect(ele.startCounter).toBe(parseInt(INPUT_VALUE));
  });
});
