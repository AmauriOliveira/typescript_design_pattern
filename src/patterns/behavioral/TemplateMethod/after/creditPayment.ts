import Payment from './payment';

export default class CreditPayment extends Payment {
  calculateTax(): number {
    return this.value * 0.05;
  }

  calculateDiscount(): number {
    return this.value > 300 ? this.value * 0.02 : 0;
  }
}
