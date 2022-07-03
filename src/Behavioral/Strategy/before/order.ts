export default abstract class Order {
  private value = 0;

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }

  abstract calculateCommonShipping(): number;

  abstract calculateExpressShipping(): number;
}
