import Node, { ILinkedListNode } from "./Node";

type TNode<T> = ILinkedListNode<T> | null;

export default class LinkedList<T> {
  private head: TNode<T> = null;
  private tail: TNode<T> = null;
  private _length: number = 0;

  constructor(value?: T) {
    if (value) {
      this.append(value);
    }
    return this;
  }

  public get length(): number {
    return !!this._length ? this._length : -1;
  }

  append(value: T): LinkedList<T> {
    if (!this.head) {
      this.head = new Node(value);
      this.tail = this.head;
    } else if (!!this.tail) {
      const freshNode = new Node(value);
      this.tail.next = freshNode;
      this.tail = freshNode;
    }

    this._length += 1;
    return this;
  }

  prepend(value: T): LinkedList<T> {
    if (!this.head) {
      this.head = new Node(value);
    }
    const next = this.head;
    this.head = new Node(value, next);
    this._length += 1;
    return this;
  }
  find(value: T): boolean {
    // loop through to find the value

    let current = this.head;
    while (current) {
      const currentValue = current.value;
      if (value === currentValue) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  fromArray(value: T[]): LinkedList<T> {
    if (!!value.length) {
      value.forEach((el) => this.append(el));
    }
    return this;
  }

  delete(value: T): void {
    if (!this.head || !this.find(value)) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this._length -= 1;
      return;
    }

    let prev: TNode<T> = this.head;
    let current: TNode<T> = this.head.next;

    while (current) {
      if (current.value === value && current.next) {
        prev.next = current.next;
        this._length -= 1;
        return;
      }
      if (current.value === value && !current.next) {
        this.tail = prev;
        this.tail.next = null;
        this._length -= 1;
        return;
      }

      prev = current;
      current = current.next;
    }

    console.log(prev, current);
  }
  toArray(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result.length ? result : [];
  }
  forEach(callback: (el: T) => void) {
    if (typeof callback !== "function") throw "parameter must be a function";
    let current = this.head;
    while (current) {
      callback(current.value);
      current = current.next;
    }
    return this;
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
}

// const list = new LinkedList(2);
// console.log(list.gethead(), "helo");
