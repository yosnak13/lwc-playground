/**
 * Created by yoshihisanakai on 2024/04/26.
 */

import {createElement} from 'lwc';
import Numerator from "../numerator";

describe('numerator', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('display default number = 0', () => {
    const element = createElement('c-numerator', {
      is: Numerator
    });
    document.body.appendChild(element);

    const num = element.shadowRoot.querySelector('lightning-formatted-number');
    expect(num.value).toBe(0);
  });

  it('success increase by add event', () => {
    const element = createElement('c-numerator', {
      is: Numerator
    });
    document.body.appendChild(element);

    const controlsComponent = element.shadowRoot.querySelector('c-controls');
    controlsComponent.dispatchEvent(new CustomEvent('add'));

    expect(element.counter).toBe(1);
  });

  it('success decrease by subtract event', () => {
    const element = createElement('c-numerator', {
      is: Numerator
    });
    document.body.appendChild(element);

    const controlsComponent = element.shadowRoot.querySelector('c-controls');
    controlsComponent.dispatchEvent(new CustomEvent('subtract'));

    expect(element.counter).toBe(-1);
  });

  it('success multiple by multiple event', () => {
    const element = createElement('c-numerator', {
      is: Numerator
    });
    document.body.appendChild(element);
    element.counter = 1;

    const controlsComponent = element.shadowRoot.querySelector('c-controls');
    controlsComponent.dispatchEvent(new CustomEvent('multiply', {detail: 2}));

    expect(element.counter).toBe(2);
  });
});
