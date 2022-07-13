import Observer from './observer';
import Subject from './subject';

export default class NewsLetter implements Subject {
  private observers: Observer[] = [];

  private message: string[] = [];

  private response: string[] = [];

  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(observerItem => observerItem !== observer);
  }

  notifyObservers(): string[] {
    this.response = [];

    this.observers.forEach(observer => {
      this.response.push(observer.update(this.message.slice(-1)[0]));
    });

    return this.response;
  }

  addMessage(message: string): string[] {
    this.message.push(message);

    return this.notifyObservers();
  }
}
