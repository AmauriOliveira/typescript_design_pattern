import Order from './order';

export default class Eletronico extends Order {
  private sectorName: string;

  constructor() {
    super();
    this.sectorName = 'Eletrônicos';
  }

  getSectorName(): string {
    return this.sectorName;
  }

  setSectorName(sectorName: string): void {
    this.sectorName = sectorName;
  }

  calculateCommonShipping(): number {
    return this.getValue() * 0.05;
  }

  calculateExpressShipping(): number {
    return this.getValue() * 0.1;
  }
}
