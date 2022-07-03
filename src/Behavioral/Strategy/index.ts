/* eslint-disable no-console */

import { DataTransferModel } from '../../shared/util';
import BeforeEletronico from './before/eletronico';
import BeforeMovel from './before/movel';

const pedidoEletronico = new BeforeEletronico();
const pedidoMovel = new BeforeMovel();

export function Before(): DataTransferModel {
  pedidoEletronico.setValor(100);
  pedidoMovel.setValor(100);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let movelExpresso: any;

  try {
    movelExpresso = pedidoMovel.calculaValorFreteExpresso();
  } catch (error) {
    movelExpresso = error;
  }

  return {
    eletronicoComum: pedidoEletronico.calculaValorFreteComum(),
    eletronicoExpresso: pedidoEletronico.calculaValorFreteExpresso(),
    movelComum: pedidoMovel.calculaValorFreteComum(),
    movelExpresso,
  };
}

export function After(): DataTransferModel {
  return {};
}
