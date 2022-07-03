import Order from './order';

export default class Furniture extends Order {
  private sectorName: string;

  constructor() {
    super();
    this.sectorName = 'Moveis';
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

  // eslint-disable-next-line class-methods-use-this
  calculateExpressShipping(): number {
    throw new Error('Method not implemented.');
  }
}
