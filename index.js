// ------------------------global varibals--------------------
let globalID = 0;
// -------------------------functions---------------------------
const getId = () => {

	return (globalID += 1);
}

const makeTodo = (title, text, complete) => ({
    id: getId(),
    title,
    text,
    complete,
});

const makeTodos = (n) => {
    let todos = [];
    for (let i = 1; i <= n; i++) {
        const title = `title${i}`;
        const text = `text${i}`;
        const complete = false;
        const todo = makeTodo(title, text, complete);
        todos = addTodo(todos, todo);
    }
    return todos;
};

const addTodo = (todoArray, newTodo) => todoArray.concat(newTodo);

const removeTodo = (todoArray, todoId) =>
    todoArray.filter((todoItem) => todoItem.id !== todoId);

const removeCompleted = (todoArray) =>
    todoArray.filter((todoItem) => !todoItem.complete);

const changeTodoTitle = (todoArray, todoId, title) =>
    todoArray.map((todoItem) =>
        todoItem.id === todoId ? { ...todoItem, title } : todoItem
    );

const changeTodoComplete = (todoArray, todoId, complete) =>
    todoArray.map((todoItem) =>
        todoItem.id === todoId ? { ...todoItem, complete } : todoItem
    );

const editedTodo = (todoArray, todoEdited) => {
    if (todoEdited) {
        return todoArray.map((todoItem) =>
            todoItem.id === todoEdited.id
                ? { ...todoItem, ...todoEdited }
                : todoItem
        );
    }
    throw new Error("Entering edited object not correct or null");
};
