/* eslint-disable no-console */

import { DataTransferModel } from '../../../shared/util';
import BeforeElectronic from './before/electronic';
import BeforeFurniture from './before/furniture';

import AfterElectronic from './after/electronic';
import AfterFurniture from './after/furniture';

const beforeElectronic = new BeforeElectronic();
const beforeFurniture = new BeforeFurniture();

const afterElectronic = new AfterElectronic();
const afterFurniture = new AfterFurniture();

export function Before(): DataTransferModel {
  beforeElectronic.setValue(100);
  beforeFurniture.setValue(100);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let furnitureExpress: any;

  try {
    furnitureExpress = beforeFurniture.calculateExpressShipping();
  } catch (error) {
    furnitureExpress = error;
  }

  return {
    electronicCommon: beforeElectronic.calculateCommonShipping(),
    electronicExpress: beforeElectronic.calculateExpressShipping(),
    furnitureCommon: beforeElectronic.calculateCommonShipping(),
    furnitureExpress,
  };
}

export function After(): DataTransferModel {
  afterElectronic.setValue(100);
  afterFurniture.setValue(100);
  return {
    electronicCommon: afterElectronic.calculateCommonShipping(),
    electronicExpress: afterElectronic.calculateExpressShipping(),
    furnitureCommon: afterElectronic.calculateCommonShipping(),
    furnitureExpress: 0,
  };
}
