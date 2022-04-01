import LinkedList from "../src/data-structure/Linked-list";

// implements("")
describe("testing linked-list", () => {
  const list = new LinkedList();
  const arr = [2, 3, 4, 5, 6, 7, 8];
  test("list from array", () =>
    expect(list.fromArray(arr).length).toBe(arr.length));
});
