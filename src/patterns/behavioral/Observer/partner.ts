import Email from './email';
import Observer from './observer';
import Subject from './subject';

export default class Partner implements Observer {
  private name: string;

  private email: string;

  private subject: Subject;

  constructor(name: string, email: string, subject: Subject) {
    this.name = name;
    this.email = email;
    this.subject = subject;

    this.subject.registerObserver(this);
  }

  update(message: string): string {
    return Email.send(this, message);
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }
}
