type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: "Assistir Dark de novo",
  description: "Relembrar os detalhes",
  completed: false,
};

console.log(todo);

// Não vai permitir, por causa do Readonly
// todo.completed = true

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  // Partial deixa todas as propriedades de Todo opcionais
  return { ...todo, ...fieldsToUpdate }; // "..." = threads operators
}

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

//// Pick -> Quando de 5 propriedades, você quer 1
type TodoPreview = Pick<Todo, "title" | "completed">; // Esse "|" é E

const todo3: TodoPreview = {
  title: "Fechar Ghost of Tsushima",
  completed: false,
};

//// Omit -> Quando de 5 propriedades, você quer 4
type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview2 = {
  title: "Fechar Ghost of Tsushima",
  completed: false,
};
