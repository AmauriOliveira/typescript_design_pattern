export interface ShippingStrategy {
  calculateShipping(value: number): number;
}
