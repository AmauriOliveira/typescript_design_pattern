import { DataTransferModel } from '../../../shared/util';
import CommonShipping from './after/commonShipping';
import AfterElectronic from './after/electronic';
import ExpressShipping from './after/expressShipping';
import AfterFurniture from './after/furniture';
import BeforeElectronic from './before/electronic';
import BeforeFurniture from './before/furniture';

export function Before(): DataTransferModel {
  const beforeElectronic = new BeforeElectronic();
  const beforeFurniture = new BeforeFurniture();

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
  const commonShipping = new CommonShipping();
  const expressShipping = new ExpressShipping();

  const afterCommonElectronic = new AfterElectronic(commonShipping);
  const afterExpressElectronic = new AfterElectronic(expressShipping);

  const afterCommonFurniture = new AfterFurniture(commonShipping);

  afterCommonElectronic.setValue(100);
  afterExpressElectronic.setValue(100);

  afterCommonFurniture.setValue(100);

  return {
    electronicCommon: afterCommonElectronic.calculate(),
    electronicExpress: afterExpressElectronic.calculate(),
    furnitureCommon: afterCommonFurniture.calculate(),
  };
}
