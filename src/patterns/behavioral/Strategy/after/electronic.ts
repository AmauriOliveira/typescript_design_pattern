import { ShippingStrategy } from './shippingStrategy ';
import Order from './order';

export default class Electronic extends Order {
  private sectorName: string;

  constructor(shippingStrategy: ShippingStrategy) {
    super(shippingStrategy);
    this.sectorName = 'Moveis';
  }

  getSectorName(): string {
    return this.sectorName;
  }

  setSectorName(sectorName: string): void {
    this.sectorName = sectorName;
  }
}
