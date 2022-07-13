import { DataTransferModel } from '../../../shared/util';
import AfterCreditPayment from './after/creditPayment';
import AfterDebtPayment from './after/debtPayment';
import AfterMoneyPayment from './after/moneyPayment';
import BeforeCreditPayment from './before/creditPayment';
import BeforeDebtPayment from './before/debtPayment';
import BeforeMoneyPayment from './before/moneyPayment';
import Gateway from './gateway';

const value = 1000;
const gateway = new Gateway();

export function Before(): DataTransferModel {
  const beforeCreditPayment = new BeforeCreditPayment(gateway, value);
  const beforeDebtPayment = new BeforeDebtPayment(gateway, value);
  const beforeMoneyPayment = new BeforeMoneyPayment(gateway, value);

  return {
    creditPayment: beforeCreditPayment.charge(),
    debtPayment: beforeDebtPayment.charge(),
    moneyPayment: beforeMoneyPayment.charge(),
  };
}

export function After(): DataTransferModel {
  const afterCreditPayment = new AfterCreditPayment(gateway, value);
  const afterDebtPayment = new AfterDebtPayment(gateway, value);
  const afterMoneyPayment = new AfterMoneyPayment(gateway, value);

  return {
    creditPayment: afterCreditPayment.charge(),
    debtPayment: afterDebtPayment.charge(),
    moneyPayment: afterMoneyPayment.charge(),
  };
}
