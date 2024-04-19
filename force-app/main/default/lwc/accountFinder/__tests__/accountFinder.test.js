import {createElement} from 'lwc';
import accountFinder from 'c/accountFinder';
import {createApexTestWireAdapter} from "@salesforce/sfdx-lwc-jest";
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';

const mockAccountsByRevenue = require('./data/queryAccountsByRevenue.json');

jest.mock(
  '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue', () => {
    const {
      createApexTestWireAdapter
    } = require('@salesforce/sfdx-lwc-jest');
    return {
      default: createApexTestWireAdapter(jest.fn())
    };
  },
  {virtual: true}
);


describe('c-account-finder', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    jest.clearAllMocks();
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

  it('getAccounts @wire queryAccountsByRevenue', () => {
    const element = createElement('c-account-finder', {
      is: accountFinder
    });
    document.body.appendChild(element);
    queryAccountsByRevenue.emit(mockAccountsByRevenue);

    return Promise.resolve().then(() => {
      const accountElements = element.shadowRoot.querySelectorAll('p');
      expect(accountElements.length).toBe(mockAccountsByRevenue.length);
    });
  });

  it('error @wire queryAccountsByRevenue', () => {
    const element = createElement('c-account-finder', {
      is: accountFinder
    });
    document.body.appendChild(element);
    queryAccountsByRevenue.error();

    return Promise.resolve().then(() => {
      const errorElement = element.shadowRoot.querySelectorAll('p');
      expect(errorElement).not.toBeNull();
    });
  });
});
