import Payment from './payment';

export default class DebtPayment extends Payment {
  // eslint-disable-next-line class-methods-use-this
  calculateTax(): number {
    return 4;
  }

  calculateDiscount(): number {
    return this.value * 0.05;
  }
}
