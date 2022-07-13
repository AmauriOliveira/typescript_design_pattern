export default interface Observer {
  update(message: string): string;
  getName(): string;
  getEmail(): string;
}
