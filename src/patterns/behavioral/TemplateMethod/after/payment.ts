import Gateway from '../gateway';

export default abstract class Payment {
  private gateway: Gateway;

  protected value: number;

  constructor(gateway: Gateway, value: number) {
    this.gateway = gateway;
    this.value = value;
  }

  // eslint-disable-next-line class-methods-use-this
  calculateTax(): number {
    return 0; // Exemplo de Hook
  }

  abstract calculateDiscount(): number;

  // Exemplo de Template Method
  charge(): string {
    const amountCharged = this.value + this.calculateTax() - this.calculateDiscount();

    return this.gateway.pay(amountCharged);
  }
}
