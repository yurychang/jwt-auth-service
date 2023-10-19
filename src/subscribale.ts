export type Subscriber = (value: any) => void;

export class Subscribable {
  private subscribers: Subscriber[] = [];

  subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter((s) => s !== subscriber);
  }

  notify(value: any) {
    this.subscribers.forEach((subscriber) => {
      subscriber(value);
    });
  }
}
