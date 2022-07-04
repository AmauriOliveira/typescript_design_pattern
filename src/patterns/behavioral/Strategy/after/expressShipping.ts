/* eslint-disable class-methods-use-this */
import { ShippingStrategy } from './shippingStrategy ';

export default class ExpressShipping implements ShippingStrategy {
  calculateShipping(value: number): number {
    return value * 0.1;
  }
}
