export interface ILinkedListNode<T> {
  value: T;
  next: ILinkedListNode<T> | null;
}
type Next<T> = ILinkedListNode<T> | null;

export default class LinkedListNode<T> implements ILinkedListNode<T> {
  public value: T;
  public next: Next<T>;

  constructor(value: T, next: Next<T> = null) {
    this.value = value;
    this.next = next;
  }
}
