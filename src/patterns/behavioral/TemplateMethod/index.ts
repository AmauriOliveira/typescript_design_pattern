import { DataTransferModel } from '../../../shared/util';
import CreditPayment from './before/creditPayment';
import DebtPayment from './before/debtPayment';
import MoneyPayment from './before/moneyPayment';
import Gateway from './gateway';

const value = 1000;
const gateway = new Gateway();

export function Before(): DataTransferModel {
  const creditPayment = new CreditPayment(gateway, value);
  const debtPayment = new DebtPayment(gateway, value);
  const moneyPayment = new MoneyPayment(gateway, value);

  return {
    creditPayment: creditPayment.charge(),
    debtPayment: debtPayment.charge(),
    moneyPayment: moneyPayment.charge(),
  };
}

export function After(): DataTransferModel {
  return {};
}
