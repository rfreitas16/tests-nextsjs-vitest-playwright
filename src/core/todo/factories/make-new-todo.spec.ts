import { makeNewTodo } from "./make-new-todo";

describe("makeNweTodo (unit)", () => {
  describe("created", () => {
    test("create new todo", () => {
      ///AAA -> arrange, act, assert
      const expectedTodo = {
        id: expect.any(String),
        description: "novo todo",
        createdAt: expect.any(String),
      };

      const newTodo = makeNewTodo("novo todo");
      // checando apenas um
      // expect(newTodo.description).toBe(expectedTodo.description);

      //checando varios
      expect(newTodo).toStrictEqual(expectedTodo);
    });
  });
});
