import Pedido from './pedido';

export default class Movel extends Pedido {
  private nomeSetor: string;

  constructor() {
    super();
    this.nomeSetor = 'Moveis';
  }

  getNomeSetor(): string {
    return this.nomeSetor;
  }

  setNomeSetor(nomeSetor: string): void {
    this.nomeSetor = nomeSetor;
  }

  calculaValorFreteComum(): number {
    return this.getValor() * 0.05;
  }

  // eslint-disable-next-line class-methods-use-this
  calculaValorFreteExpresso(): number {
    throw new Error('Method not implemented.');
  }
}
