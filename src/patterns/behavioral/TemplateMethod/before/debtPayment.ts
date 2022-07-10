import Gateway from '../gateway';

export default class DebtPayment {
  private gateway: Gateway;

  private value: number;

  constructor(gateway: Gateway, value: number) {
    this.gateway = gateway;
    this.value = value;
  }

  // eslint-disable-next-line class-methods-use-this
  calculateTax(): number {
    return 4;
  }

  calculateDiscount(): number {
    return this.value * 0.05;
  }

  charge(): string {
    const amountCharged = this.value + this.calculateTax() - this.calculateDiscount();

    return this.gateway.pay(amountCharged);
  }
}
