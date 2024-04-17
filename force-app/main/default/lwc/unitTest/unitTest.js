/**
 * Created by yoshihisanakai on 2024/04/17.
 */

import {LightningElement, api} from 'lwc';
import {sum} from './sum';

export default class UnitTest extends LightningElement {
  @api unitNumber = sum(2, 3);
}