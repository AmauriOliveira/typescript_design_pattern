import Gateway from '../gateway';

export default class CreditPayment {
  private gateway: Gateway;

  private value: number;

  constructor(gateway: Gateway, value: number) {
    this.gateway = gateway;
    this.value = value;
  }

  calculateTax(): number {
    return this.value * 0.05;
  }

  calculateDiscount(): number {
    return this.value > 300 ? this.value * 0.02 : 0;
  }

  charge(): string {
    const amountCharged = this.value + this.calculateTax() - this.calculateDiscount();

    return this.gateway.pay(amountCharged);
  }
}
