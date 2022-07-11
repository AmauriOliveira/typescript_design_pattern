import Payment from './payment';

export default class MoneyPayment extends Payment {
  calculateDiscount(): number {
    return this.value * 0.1;
  }
}
