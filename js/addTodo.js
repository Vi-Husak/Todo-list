const addTodo = (text) => {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  return todo;
};

export { addTodo };
