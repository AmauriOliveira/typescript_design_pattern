export default abstract class Pedido {
  private valor = 0;

  getValor(): number {
    return this.valor;
  }

  setValor(valor: number): void {
    this.valor = valor;
  }

  abstract calculaValorFreteComum(): number;

  abstract calculaValorFreteExpresso(): number;
}
