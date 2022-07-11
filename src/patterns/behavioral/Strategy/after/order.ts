import { ShippingStrategy } from './shippingStrategy ';

export default abstract class Order {
  private value = 0;

  private shipping: ShippingStrategy;

  constructor(private shippingStrategy: ShippingStrategy) {
    this.shipping = this.shippingStrategy;
  }

  setValue(value: number): void {
    this.value = value;
  }

  setShipping(shipping: ShippingStrategy): void {
    this.shipping = shipping;
  }

  calculate(): number {
    return this.shipping.calculateShipping(this.value);
  }
}
