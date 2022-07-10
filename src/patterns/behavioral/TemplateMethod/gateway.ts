/* eslint-disable class-methods-use-this */
export default class Gateway {
  pay(value: number): string {
    const status = Math.round(Math.random()) ? 'success' : 'failure';

    return `status: ${status}, value: ${value}`;
  }
}
