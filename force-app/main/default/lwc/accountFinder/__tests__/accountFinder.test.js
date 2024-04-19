import {createElement} from 'lwc';
import accountFinder from 'c/accountFinder';
import * as events from "node:events";

describe('c-account-finder', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('sets annualRevenue when handleChange is called', () => {
    const element = createElement('c-account-finder', {
      is: accountFinder
    });
    document.body.appendChild(element);
    const inputEl = element.shadowRoot.querySelector('lightning-input');
    const changeEvent = new CustomEvent('change', {
      detail: {value: '100'}
    });
    inputEl.dispatchEvent(changeEvent);
    expect(element.annualRevenue).toBe('100');
  });

  it('resets annualRevenue when reset is called', () => {
    const element = createElement('c-account-finder', {
      is: accountFinder
    });
    document.body.appendChild(element);
    const inputEl = element.shadowRoot.querySelector('lightning-input');
    const changeEvent = new CustomEvent('change', {
      detail: {value: '100'}
    });
    inputEl.dispatchEvent(changeEvent);

    const resetEvent = new CustomEvent('reset');
    element.dispatchEvent(resetEvent);
    expect(element.annualRevenue).toBeNull;
  });
});