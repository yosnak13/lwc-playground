import {createElement} from 'lwc';
import AccountSearch from 'c/accountSearch';

describe('c-account-search', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('sets numberOfEmployees when handleChange is called', () => {
    const element = createElement('c-account-search', {
      is: AccountSearch
    });
    document.body.appendChild(element);
    const inputEl = element.shadowRoot.querySelector('lightning-input');
    const changeEvent = new CustomEvent('change', {
      detail: { value: '100' }
    });
    inputEl.dispatchEvent(changeEvent);
    expect(element.numberOfEmployees).toBe('100');
  });

  it('resets numberOfEmployees when reset is called', () => {
    const element = createElement('c-account-search', {
      is: AccountSearch
    });
    document.body.appendChild(element);
    const inputEl = element.shadowRoot.querySelector('lightning-input');
    const changeEvent = new CustomEvent('change', {
      detail: { value: '100' }
    });
    inputEl.dispatchEvent(changeEvent);

    const resetEvent = new CustomEvent('reset');
    element.dispatchEvent(resetEvent);

    expect(element.numberOfEmployees).toBeNull;
  });
});
