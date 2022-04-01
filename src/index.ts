import LinkedList from "./data-structure/Linked-list";

const list = new LinkedList<number>();
list.append(6).prepend(7).prepend(4).append(2);
list.fromArray([22, 23, 24, 25]).append(5);
list.delete(5);

console.log(list.toArray());
console.log(list.length);
console.log(list.getTail());
// list.forEach((el) => el + 2);
console.log(list.toArray());
