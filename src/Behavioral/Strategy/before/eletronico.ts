import Pedido from './pedido';

export default class Eletronico extends Pedido {
  private nomeSetor: string;

  constructor() {
    super();
    this.nomeSetor = 'Eletrônicos';
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

  calculaValorFreteExpresso(): number {
    return this.getValor() * 0.1;
  }
}
