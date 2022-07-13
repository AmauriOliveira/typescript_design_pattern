import Observer from './observer';

export default class Email {
  static send(observer: Observer, message: string): string {
    return `The ${observer.getName()} - ${observer.getEmail()} send : '${message}'.`;
  }
}
